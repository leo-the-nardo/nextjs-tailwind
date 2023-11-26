import { User } from "lucide-react"

type Props = {}

export function ImagePreview({}: Props) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
      <User className="h-8 w-8 text-violet-500" />
    </div>
  )
}
