import Image from "next/image"
import { Separator } from "./ui/separator"
import User from "@/public/icons/user.svg"
import Pencil from "@/public/icons/pencil.svg"

export function ProjectHeader() {
  return (
    <div className="bg-white px-6 py-4 gap-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-[24px]">
          <h1 className="text-2xl font-bold text-gray-900">Sport Xi Project</h1>
          <div className="bg-amber-500/80 w-[81px] h-[20px] flex items-center justify-center rounded-sm">
            <span className=" text-black text-center  text-[10px] font-medium ">
              In progress
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-500/70 mb-3 text-[17px]">event production</p>

      <div className="flex items-center space-x-6 text-sm text-gray-500">
        <div className="flex items-center space-x-[18px] mb-[26px]">
          <span className="text-[16px] text-gray-500/70">assigned</span>
          <div className="flex -space-x-2">
            {/* assigned member set */}
            <div className="w-[24px] h-[24px] rounded-full bg-gray-400 border-1 border-white flex items-center justify-center text-white text-xs font-medium">
              <Image src={User} alt="Logo" className="h-[24px]" />
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-gray-400 border-1 border-white flex items-center justify-center text-white text-xs font-medium">
              <Image src={User} alt="Logo" className="h-[24px]" />
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-gray-400 border-1 border-white flex items-center justify-center text-white text-xs font-medium">
              <Image src={User} alt="Logo" className="h-[24px]" />
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-gray-300 border-1 !border-white flex items-center justify-center text-gray-900 text-[9px] font-medium text-center">
              +2
            </div>
          </div>
          <div className="flex items-center w-[101px] h-[30px] py-[4px] px-[12px] rounded-full border !border-gray-200 gap-[12px] justify-between">
            <button className="text-gray-500/70 text-[12px]">Manage</button>
            <Image src={Pencil} alt="Logo" className="h-[16px]" />
          </div>
        </div>
      </div>
      <Separator className="mx-6 flex-shrink-0" />
      <div className=" border !border-gray-200 flex flex-row items-center justify-between" />
      <div className="mt-[17px] text-[14px] text-gray-500/70">
        Last updated on 04 April, 2022
      </div>
    </div>
  )
}
