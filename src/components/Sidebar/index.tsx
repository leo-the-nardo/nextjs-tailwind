import React from "react"
import { Logo } from "./Logo"
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  LifeBuoy,
  Search,
  Settings,
  SquareStack,
  Users,
} from "lucide-react"
import PrimaryNavItem from "./PrimaryNavItem"
import SecondaryNavItem from "./SecondaryNavItem"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className=" mx-1 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search size={24} className="h-5 w-5 text-zinc-500" />
        <input
          className="min-w-0 flex-1 bg-transparent text-zinc-900 placeholder-zinc-600 outline-none"
          placeholder="Search"
        />
      </div>

      <nav className="flex flex-col gap-1">
        <PrimaryNavItem icon={Home} title="Home" />
        <PrimaryNavItem icon={BarChart} title="Dashboard" />
        <PrimaryNavItem icon={SquareStack} title="Projects" />
        <PrimaryNavItem icon={CheckSquare} title="Tasks" />
        <PrimaryNavItem icon={Flag} title="Reporting" />
        <PrimaryNavItem icon={Users} title="Users" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="flex flex-col gap-1">
          <SecondaryNavItem icon={LifeBuoy} title="Support" />
          <SecondaryNavItem icon={Settings} title="Settings" />
        </nav>
      </div>
    </aside>
  )
}
