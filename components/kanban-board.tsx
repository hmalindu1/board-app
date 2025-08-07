"use client"

import React from "react"
import Image from "next/image"
import { Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import User from "@/public/icons/user.svg"
import Message from "@/public/icons/message.svg"
import Calendar from "@/public/icons/calendar.svg"
import Link from "@/public/icons/link.svg"
import Alert from "@/public/icons/alert.svg"
import Report from "@/public/icons/report.svg"
import Flash from "@/public/icons/flash.svg"
import ImagePreview from "@/public/icons/image.svg"

interface Task {
  id: string
  title: string
  category:
    | "Research"
    | "Design"
    | "Feedback"
    | "Other"
    | "Presentation"
    | "Interface"
    | "UX Research"
  categoryColor: string
  assignees: number
  priority?: string
  links?: number
  comments?: number
  dueDate?: string
  hasImage?: boolean
  hasGroupCall?: boolean
  reports?: number
}

interface Column {
  id: string
  title: string
  color: string
  bgColor: string
  tasks: Task[]
}

const kanbanData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "#6B7280",
    bgColor: "#F3F4F6",
    tasks: [
      {
        id: "1",
        title: "User Interview",
        category: "Research",
        categoryColor: "#AEE753",
        assignees: 1,
        priority: "Low",
        links: 2,
        comments: 2,
        dueDate: "Tomorrow",
      },
      {
        id: "2",
        title: "Design System",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 2,
        priority: "Medium",
        links: 3,
        comments: 8,
        reports: 2,
      },
      {
        id: "3",
        title: "Speech",
        category: "Other",
        categoryColor: "#6B7280",
        assignees: 3,
        priority: "Low",
        links: 1,
        comments: 3,
      },
      {
        id: "4",
        title: "Wireframe",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 3,
        priority: "High",
        hasImage: true,
      },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "Black",
    bgColor: "#F59E0B",
    tasks: [
      {
        id: "5",
        title: "UI Design",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 2,
        priority: "High",
        links: 2,
        comments: 1,
        dueDate: "Tomorrow",
      },
      {
        id: "6",
        title: "Check Clients Feedback",
        category: "Feedback",
        categoryColor: "#3B82F6",
        assignees: 3,
        priority: "Low",
        comments: 8,
        dueDate: "22 April, 2022",
        hasImage: true,
      },
      {
        id: "7",
        title: "Copyright",
        category: "Presentation",
        categoryColor: "#F59E0B",
        assignees: 1,
        priority: "Low",
        comments: 4,
        dueDate: "22 April, 2022",
      },
      {
        id: "8",
        title: "Filter sorting",
        category: "UX Research",
        categoryColor: "#F59E0B",
        assignees: 2,
        priority: "Low",
      },
    ],
  },
  {
    id: "approved",
    title: "Approved",
    color: "Black",
    bgColor: "#AEE753",
    tasks: [
      {
        id: "9",
        title: "Prototype",
        category: "Research",
        categoryColor: "#AEE753",
        assignees: 3,
        priority: "Low",
        links: 35,
        comments: 243,
      },
      {
        id: "10",
        title: "Detail Page",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 3,
        priority: "Low",
        links: 6,
        comments: 28,
        hasImage: true,
      },
      {
        id: "11",
        title: "Animation preloaders",
        category: "Interface",
        categoryColor: "#6B7280",
        assignees: 1,
        priority: "High",
        links: 4,
        comments: 9,
      },
      {
        id: "12",
        title: "Sorting category",
        category: "UX Research",
        categoryColor: "#F59E0B",
        assignees: 3,
        priority: "High",
      },
    ],
  },
  {
    id: "reject",
    title: "Reject",
    color: "#FFFFFF",
    bgColor: "#EF4444",
    tasks: [
      {
        id: "13",
        title: "Group Management",
        category: "Other",
        categoryColor: "#6B7280",
        assignees: 1,
        priority: "Low",
        comments: 329,
        hasGroupCall: true,
      },
      {
        id: "14",
        title: "Design System",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 1,
        priority: "Low",
        links: 3,
        comments: 8,
        reports: 2,
      },
      {
        id: "15",
        title: "Slider controls",
        category: "Interface",
        categoryColor: "#6B7280",
        assignees: 2,
        priority: "Low",
        links: 8,
        comments: 31,
      },
      {
        id: "16",
        title: "Slider controls",
        category: "Design",
        categoryColor: "#EF4444",
        assignees: 3,
        priority: "Low",
        hasImage: true,
      },
    ],
  },
]

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div className="bg-white rounded-lg px-4 py-2 mb-3 shadow-sm border !border-gray-100 hover:shadow-md transition-shadow">
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
              <Image src={User} alt="Logo" className="h-[24px]" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-gray-200/50 rounded px-1 py-1">
          <Image src={Flash} alt="Logo" className="h-[12px]" />
          <span className="text-[8px] text-gray-400 font-medium">
            {task.priority}
          </span>
        </div>
      </div>

      {/* Image placeholder for tasks that have attachments */}
      {task.hasImage && (
        <div className="w-full h-[90px] bg-gray-700 rounded mb-3 flex items-center justify-center">
          <div className="w-6 h-6 border border-gray-500 rounded flex items-center justify-center">
            <Image src={ImagePreview} alt="Logo" className="h-[12px]" />
          </div>
        </div>
      )}

      {/* Bottom metadata row with links, comments, due dates, etc. */}
      <div className="border-t !border-gray-200 pt-2" />
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          {task.links && (
            <div className="flex items-center gap-1">
              <Image src={Link} alt="Logo" className="h-[16px]" />
              <span>{task.links}</span>
            </div>
          )}
          {task.comments && (
            <div className="flex items-center gap-1">
              <Image src={Message} alt="Logo" className="h-[16px]" />
              <span>{task.comments}</span>
            </div>
          )}
          {task.hasGroupCall && (
            <div className="flex items-center gap-1">
              <Image src={Alert} alt="Logo" className="h-[16px]" />
              <span className="text-blue-500">Group Call</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Image src={Calendar} alt="Logo" className="h-[16px]" />
              <span>Due: {task.dueDate}</span>
            </div>
          )}

          {task.reports && (
            <div className="flex items-center gap-1">
              <Image src={Report} alt="Logo" className="h-[16px]" />
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
      <div className="flex-1 bg-gray-50 px-6 pb-6 pt-6">
        <div className="space-y-0">
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const KanbanBoard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white">
        <div className="flex overflow-x-auto">
          {kanbanData.map((column, index) => (
            <div key={column.id} className="flex">
              <KanbanColumn column={column} />
              {/* Add divider line between columns, except after the last one */}
              {index < kanbanData.length - 1 && (
                <div className="w-px bg-gray-200 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
