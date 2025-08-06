"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProjectHeader } from "./project-heading"

interface ClientLayoutWrapperProps {
  children: React.ReactNode
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="flex-shrink-0">
        <Header />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="flex-shrink-0">
          <Sidebar />
        </aside>
        <div className="flex-1 bg-gray-50 min-h-screen">
          <ProjectHeader />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  )
}
