import React, { ElementType } from "react"

type Props = {
  title: string
  icon: ElementType
}
export default function SecondaryNavItem({ title, icon: Icon }: Props) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800">
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500 dark:group-hover:text-violet-300 " />
      <p className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </p>
    </a>
  )
}
