"use client"

import React, { useEffect, useMemo } from "react"
import Image from "next/image"
import { Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTaskStore, type Task, type Status } from "@/lib/store"
import User from "@/public/icons/user.svg"
import Message from "@/public/icons/message.svg"
import Calendar from "@/public/icons/calendar.svg"
import Link from "@/public/icons/link.svg"
import Alert from "@/public/icons/alert.svg"
import Report from "@/public/icons/report.svg"
import Flash from "@/public/icons/flash.svg"
import ImagePreview from "@/public/icons/image.svg"

interface Column {
  id: Status
  title: string
  color: string
  bgColor: string
}

const kanbanColumns: Column[] = [
  {
    id: "TODO",
    title: "To Do",
    color: "#6B7280",
    bgColor: "#F3F4F6",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
    color: "Black",
    bgColor: "#F59E0B",
  },
  {
    id: "APPROVED",
    title: "Approved",
    color: "Black",
    bgColor: "#AEE753",
  },
  {
    id: "REJECT",
    title: "Reject",
    color: "#FFFFFF",
    bgColor: "#EF4444",
  },
]

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const { dragTask } = useTaskStore()

  const handleDragStart = () => {
    dragTask(task.id)
  }

  return (
    <div
      className="bg-white rounded-lg px-4 py-2 mb-3 shadow-sm border !border-gray-100 hover:shadow-md transition-shadow cursor-move"
      draggable
      onDragStart={handleDragStart}
    >
      {/* Category badge with color indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-[8px] h-[8px] rounded-xs"
            style={{ backgroundColor: task.categoryColor }}
          />
          <span className="text-xs text-gray-500 font-medium">
            {task.category}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 hover:bg-gray-100"
        >
          <MoreHorizontal className="h-3 w-3 text-gray-400" />
        </Button>
      </div>

      {/* Task title */}
      <h3 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">
        {task.title}
      </h3>

      {/* Assignees with user avatars */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex -space-x-2">
          {Array.from({ length: task.assignees }).map((_, index) => (
            <div
              key={index}
              className="w-[24px] h-[24px] rounded-full bg-gray-400 border-1 border-white flex items-center justify-center text-white text-xs font-medium"
            >
              <Image src={User} alt="User" className="h-[24px]" />
            </div>
          ))}
        </div>
        {task.priority && (
          <div className="flex items-center gap-1 bg-gray-200/50 rounded px-1 py-1">
            <Image src={Flash} alt="Priority" className="h-[12px]" />
            <span className="text-[8px] text-gray-400 font-medium">
              {task.priority}
            </span>
          </div>
        )}
      </div>

      {/* Image placeholder for tasks that have attachments */}
      {task.hasImage && (
        <div className="w-full h-[90px] bg-gray-700 rounded mb-3 flex items-center justify-center">
          <div className="w-6 h-6 border border-gray-500 rounded flex items-center justify-center">
            <Image src={ImagePreview} alt="Image" className="h-[12px]" />
          </div>
        </div>
      )}

      {/* Bottom metadata row with links, comments, due dates, etc. */}
      <div className="border-t !border-gray-200 pt-2" />
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          {task.links && (
            <div className="flex items-center gap-1">
              <Image src={Link} alt="Links" className="h-[16px]" />
              <span>{task.links}</span>
            </div>
          )}
          {task.comments && (
            <div className="flex items-center gap-1">
              <Image src={Message} alt="Comments" className="h-[16px]" />
              <span>{task.comments}</span>
            </div>
          )}
          {task.hasGroupCall && (
            <div className="flex items-center gap-1">
              <Image src={Alert} alt="Group Call" className="h-[16px]" />
              <span className="text-blue-500">Group Call</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Image src={Calendar} alt="Due Date" className="h-[16px]" />
              <span>Due: {task.dueDate}</span>
            </div>
          )}

          {task.reports && (
            <div className="flex items-center gap-1">
              <Image src={Report} alt="Reports" className="h-[16px]" />
              <span className="text-red-500 font-medium">
                {task.reports} Reports
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const KanbanColumn: React.FC<{ column: Column }> = ({ column }) => {
  const { tasks, draggedTask, updateTask, dragTask } = useTaskStore()

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === column.id),
    [tasks, column.id]
  )

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!draggedTask) return

    updateTask(draggedTask, column.id)
    dragTask(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-[288px] min-h-screen">
      {/* Header area with white background */}
      <div className="bg-white px-6 py-3 border-y !border-gray-300">
        <div className="flex items-center justify-between">
          <div
            className="px-[24px] py-[4px] rounded-full text-sm font-medium flex items-center gap-2"
            style={{
              backgroundColor: column.bgColor,
              color: column.color,
            }}
          >
            {column.title}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content area with light gray background */}
      <div
        className="flex-1 bg-gray-50 px-6 pb-6 pt-6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="space-y-0">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {filteredTasks.length === 0 && (
            <div className="text-center text-gray-400 text-sm py-8">
              Drop tasks here
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const KanbanBoard: React.FC = () => {
  const { tasks } = useTaskStore()

  useEffect(() => {
    useTaskStore.persist.rehydrate()
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white">
        <div className="flex overflow-x-auto min-w-full">
          <div
            className="flex-1 bg-gray-200 min-w-0"
            style={{ width: "1px" }}
          />

          <div className="flex flex-shrink-0">
            {kanbanColumns.map((column, index) => (
              <div key={column.id} className="flex">
                <KanbanColumn column={column} />
                {index < kanbanColumns.length - 1 && (
                  <div className="w-px bg-gray-200 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div
            className="flex-1 bg-gray-200 min-w-0"
            style={{ width: "1px" }}
          />
        </div>
      </div>
    </div>
  )
}
