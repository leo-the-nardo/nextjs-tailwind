import React from "react"
import { Logo } from "./Logo"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
    </aside>
  )
}
