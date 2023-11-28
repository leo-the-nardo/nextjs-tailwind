"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
type Props = {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: Props) {
  return (
    <Tabs.Trigger
      value={value}
      className=":px-1 group relative pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300">
      <span className="whitespace-nowrap">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
