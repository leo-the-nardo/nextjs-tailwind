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
import UsedSpaceWidget from "./UsedSpaceWidget"
import Profile from "./Profile"
import { Input } from "../Input"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>

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
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  )
}
