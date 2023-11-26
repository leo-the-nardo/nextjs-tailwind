import React, { ElementType } from "react"

type Props = {
  title: string
  icon: ElementType
}
export default function SecondaryNavItem({ title, icon: Icon }: Props) {
  return (
    <a
      href=""
      className=" group flex flex-row items-center gap-3 rounded   px-3 py-2 hover:bg-violet-50 ">
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500 " />
      <p className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </p>
    </a>
  )
}
