"use client"
import React from "react"
import { Logo } from "./Logo"
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  LifeBuoy,
  Menu,
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
import * as Collapsible from "@radix-ui/react-collapsible"
import { Button } from "../Button"
type Props = {}

export default function Sidebar({}: Props) {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
