"use client"
import * as Select from "@radix-ui/react-select"
import { Check } from "lucide-react"

type Props = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: Props) {
  return (
    <Select.Item
      className="py2.5 flex items-center justify-between gap-2  px-3 outline-none data-[highlighted]:bg-zinc-50 "
      {...props}>
      <Select.ItemText className="text-black">Brasil</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
