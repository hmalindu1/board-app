"use client"

import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTaskStore } from "@/lib/store"
import Logo from "@/public/logo/logo.svg"
import Setting from "@/public/icons/setting.svg"
import Bell from "@/public/icons/bell.svg"
import User from "@/public/icons/user.svg"
import Image from "next/image"

export function Header() {
  const { searchQuery, setSearchQuery } = useTaskStore()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <header className="border-b !border-b-gray-300 bg-white px-[24px] ">
      <div className="flex items-center justify-between h-[80px]">
        <Image src={Logo} alt="Logo" className="h-[24px]" />

        {/* Right section - Actions and user menu */}
        <div className="flex items-center gap-[24px]">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-[12px] w-[170px] h-[48px]">
            <span className="hidden sm:inline">Create new board</span>
            <span className="sm:hidden">Create</span>
            <Plus className="h-4 w-4" />
          </Button>

          <div className="flex items-center h-[48px] w-[394px] gap-[48px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
              <Input
                type="text"
                placeholder="Search Tasks ..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 w-[240px] h-[48px] bg-gray-200 border-0 focus:bg-white focus:border-blue-300 focus:ring-blue-200 text-gray-600"
              />
            </div>

            <div className="flex gap-[14px]">
              <Image src={Setting} alt="Settings" className="h-[24px]" />
              <Image src={Bell} alt="Notifications" className="h-[24px]" />
              <Image src={User} alt="User" className="h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
