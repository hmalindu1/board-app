"use client"

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import User from "@/public/icons/user.svg"
import Dashboard from "@/public/icons/dashboard.svg"
import Board from "@/public/icons/board.svg"
import Message from "@/public/icons/message.svg"
import Member from "@/public/icons/member.svg"
import Calendar from "@/public/icons/calendar.svg"
import Info from "@/public/icons/info.svg"
import Logout from "@/public/icons/logout.svg"

interface NavigationItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
  },
  {
    name: "Boards",
    icon: Board,
    children: [
      {
        name: "Create routes",
        icon: ChevronRight,
      },
      {
        name: "Development React App",
        icon: ChevronRight,
      },
      {
        name: "Sport XI Project",
        icon: ChevronRight,
      },
      {
        name: "Wordpress theme",
        icon: ChevronRight,
      },
    ],
  },
  {
    name: "Messages",
    icon: Message,
    badge: 3,
  },
  {
    name: "Calendar",
    icon: Calendar,
  },
  {
    name: "Team members",
    icon: Member,
  },
]

export function Sidebar() {
  return (
    <div className="flex h-full w-[288px] flex-col bg-white border-r !border-gray-300 pt-[24px]">
      {/* Workspace section */}
      <div className="mx-6 px-3 py-2 rounded-lg border !border-gray-200 flex flex-row items-center justify-between">
        <div className="flex gap-3">
          <Image src={User} alt="Logo" className="h-[44px] w-[44px]" />
          <div className="flex flex-col text-sm">
            <span className="font-medium  text-gray-300">Workspace</span>
            <span className="text-sm font-medium text-gray-900">
              Root folder
            </span>
          </div>
        </div>
        <ChevronDown className="h-4 w-4" />
      </div>

      <Separator className="flex-shrink-0" />

      {/* Main navigation */}
      <div className="flex-1 overflow-y-auto py-4 min-h-0">
        <nav className="space-y-[17px]  mx-6 ">
          {navigation.map((item) => {
            return (
              <div key={item.name}>
                {/* Main navigation item */}
                <div
                  className={`flex items-center px-3 ${
                    item.name === "Boards" ? "border !border-gray-200" : ""
                  } rounded-lg 
                    `}
                >
                  <div
                    className="
                      flex flex-1 items-center gap-[20px] py-2 text-md font-medium transition-colors"
                  >
                    <Image src={item.icon} alt="Logo" className="h-[24px]" />
                    <span
                      className={`flex-1  ${
                        item.name === "Boards"
                          ? " !text-blue-600"
                          : "text-gray-500/80"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-red-500 text-white rounded-full h-6 w-6"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    {item.children && (
                      <Button variant="ghost" size="sm" className="h-4 w-4">
                        <ChevronUp className="h-4 w-4 text-blue-600" />
                      </Button>
                    )}
                  </div>

                </div>

                {/* Submenu items */}
                {item.children && (
                  <div className="space-y-[0.5px] border !border-gray-200 rounded-lg mt-[8px] py-[12px]">
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        className={`
                          flex items-center gap-[10px] rounded-lg px-3 py-2 text-sm transition-colors  ${
                            child.name === "Sport XI Project"
                              ? " !text-blue-600"
                              : "text-gray-400"
                          }
                        `}
                      >
                        <child.icon className="h-4 w-4" />
                        <span>{child.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      <Separator className="mx-6 flex-shrink-0" />

      {/* Bottom navigation */}
      <div className="py-4">
        <nav className="space-y-[17px] mx-6">
          <div
            className={`
                flex flex-1 items-center gap-[20px] py-2 text-md font-medium transition-colors px-3
              `}
          >
            <Image src={Info} alt="Logo" className="h-[24px]" />
            <span className="flex-1 text-gray-500">Support</span>
          </div>
          <div
            className={`
                flex flex-1 px-3 items-center gap-[20px] py-2 text-md font-medium transition-colors bg-gray-700 rounded-md 
              `}
          >
            <Image src={Logout} alt="Logo" className="h-[24px]" />
            <span className="flex-1 text-white">Logout</span>
          </div>
        </nav>
      </div>
    </div>
  )
}
