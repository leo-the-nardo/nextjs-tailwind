import { LogOut } from "lucide-react"
import { Button } from "../Button"

type Props = {}

export default function Profile({}: Props) {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/leo-the-nardo.png"
      />
      <div className="flex flex-col truncate">
        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Leonardo Nardo
        </p>
        <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          asdasdasdasdasdasdasdasdasdasdas@gmail.com
        </p>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
