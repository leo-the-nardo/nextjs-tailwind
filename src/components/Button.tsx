import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary: ["bg-violet-600 text-white", "hover:bg-violet-700"],
      outline: [
        "bg-zinc-50 text-zinc-700 border border-zinc-300",
        "hover:bg-zinc-100",
      ],
      ghost: [
        " rounded-md px-2 shadow-none bg-transparent text-zinc-700",
        "hover:bg-zinc-100",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})
type Props = ComponentProps<"button"> & VariantProps<typeof button>

export function Button({ variant, ...props }: Props) {
  return (
    <button className={button({ variant })} {...props}>
      {props.children}
    </button>
  )
}
