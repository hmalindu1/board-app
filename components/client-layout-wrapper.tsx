"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

interface ClientLayoutWrapperProps {
  children: React.ReactNode
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {


  return (
    <div className="h-screen flex flex-col">
      <header className="">
        <Header
        />
      </header>
      <div className="flex flex-row">
        <aside className="">
          <Sidebar />
        </aside>
        <div className="h-full">{children}</div>
      </div>
    </div>
  )
}
