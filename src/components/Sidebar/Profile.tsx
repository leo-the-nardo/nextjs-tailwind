import { LogOut } from "lucide-react"
import React from "react"

type Props = {}

export default function Profile({}: Props) {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/leo-the-nardo.png"
      />
      <div className="flex flex-col truncate">
        <p className="text-sm font-semibold text-zinc-900">Leonardo Nardo</p>
        <p className="truncate text-sm text-zinc-500">
          asdasdasdasdasdasdasdasdasdasdas@gmail.com
        </p>
      </div>
      <button
        className="ml-auto rounded-md p-2 hover:bg-zinc-200"
        type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
