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
  isLoading: boolean
  error: string | null
}

export type Actions = {
  dragTask: (id: string | null) => void
  updateTask: (id: string, status: Status) => void
  fetchTasks: () => Promise<void>
}

export const useTaskStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      tasks: [],
      draggedTask: null,
      isLoading: false,
      error: null,

      dragTask: (id) => set({ draggedTask: id }),

      updateTask: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),

      fetchTasks: async () => {
        if (get().tasks.length > 0) return

        set({ isLoading: true, error: null })

        try {
          const response = await fetch("/api/tasks.json")

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const data = await response.json()

          set({
            tasks: data.tasks,
            isLoading: false,
            error: null,
          })
        } catch (error) {
          set({
            isLoading: false,
            error:
              error instanceof Error ? error.message : "Failed to fetch tasks",
          })
        }
      },
    }),
    {
      name: "kanban-store",
      skipHydration: true,

      partialize: (state) => ({
        tasks: state.tasks,
        draggedTask: state.draggedTask,
      }),
    }
  )
)
