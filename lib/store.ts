import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Status = "TODO" | "IN_PROGRESS" | "APPROVED" | "REJECT"

export type Task = {
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
  status: Status
}

export type State = {
  tasks: Task[]
  draggedTask: string | null
}

export type Actions = {
  dragTask: (id: string | null) => void
  updateTask: (id: string, status: Status) => void
}

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "User Interview",
    category: "Research",
    categoryColor: "#AEE753",
    assignees: 1,
    priority: "Low",
    links: 2,
    comments: 2,
    dueDate: "Tomorrow",
    status: "TODO",
  },
  {
    id: "task-2",
    title: "Design System",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 2,
    priority: "Medium",
    links: 3,
    comments: 8,
    reports: 2,
    status: "TODO",
  },
  {
    id: "task-3",
    title: "Speech",
    category: "Other",
    categoryColor: "#6B7280",
    assignees: 3,
    priority: "Low",
    links: 1,
    comments: 3,
    status: "TODO",
  },
  {
    id: "task-4",
    title: "Wireframe",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 3,
    priority: "High",
    hasImage: true,
    status: "TODO",
  },
  {
    id: "task-5",
    title: "UI Design",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 2,
    priority: "High",
    links: 2,
    comments: 1,
    dueDate: "Tomorrow",
    status: "IN_PROGRESS",
  },
  {
    id: "task-6",
    title: "Check Clients Feedback",
    category: "Feedback",
    categoryColor: "#3B82F6",
    assignees: 3,
    priority: "Low",
    comments: 8,
    dueDate: "22 April, 2022",
    hasImage: true,
    status: "IN_PROGRESS",
  },
  {
    id: "task-7",
    title: "Copyright",
    category: "Presentation",
    categoryColor: "#F59E0B",
    assignees: 1,
    priority: "Low",
    comments: 4,
    dueDate: "22 April, 2022",
    status: "IN_PROGRESS",
  },
  {
    id: "task-8",
    title: "Filter sorting",
    category: "UX Research",
    categoryColor: "#F59E0B",
    assignees: 2,
    priority: "Low",
    status: "IN_PROGRESS",
  },
  {
    id: "task-9",
    title: "Prototype",
    category: "Research",
    categoryColor: "#AEE753",
    assignees: 3,
    priority: "Low",
    links: 35,
    comments: 243,
    status: "APPROVED",
  },
  {
    id: "task-10",
    title: "Detail Page",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 3,
    priority: "Low",
    links: 6,
    comments: 28,
    hasImage: true,
    status: "APPROVED",
  },
  {
    id: "task-11",
    title: "Animation preloaders",
    category: "Interface",
    categoryColor: "#6B7280",
    assignees: 1,
    priority: "High",
    links: 4,
    comments: 9,
    status: "APPROVED",
  },
  {
    id: "task-12",
    title: "Sorting category",
    category: "UX Research",
    categoryColor: "#F59E0B",
    assignees: 3,
    priority: "High",
    status: "APPROVED",
  },
  {
    id: "task-13",
    title: "Group Management",
    category: "Other",
    categoryColor: "#6B7280",
    assignees: 1,
    priority: "Low",
    comments: 329,
    hasGroupCall: true,
    status: "REJECT",
  },
  {
    id: "task-14",
    title: "Design System",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 1,
    priority: "Low",
    links: 3,
    comments: 8,
    reports: 2,
    status: "REJECT",
  },
  {
    id: "task-15",
    title: "Slider controls",
    category: "Interface",
    categoryColor: "#6B7280",
    assignees: 2,
    priority: "Low",
    links: 8,
    comments: 31,
    status: "REJECT",
  },
  {
    id: "task-16",
    title: "Slider controls",
    category: "Design",
    categoryColor: "#EF4444",
    assignees: 3,
    priority: "Low",
    hasImage: true,
    status: "REJECT",
  },
]

export const useTaskStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      tasks: initialTasks,
      draggedTask: null,

      dragTask: (id) => set({ draggedTask: id }),

      updateTask: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
    }),
    {
      name: "kanban-store",
      skipHydration: true,
    }
  )
)
