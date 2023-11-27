import { Search } from "lucide-react"
import React, { ComponentProps } from "react"

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}

type InputPrefixProps = ComponentProps<"div">
function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

type InputControlProps = ComponentProps<"input">
function InputControl(props: InputControlProps) {
  return (
    <input
      className="min-w-0 flex-1 bg-transparent text-zinc-900 placeholder-zinc-600 outline-none"
      placeholder="Search"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<"div">
function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}></div>
  )
}
