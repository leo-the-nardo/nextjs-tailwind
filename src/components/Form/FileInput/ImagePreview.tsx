"use client"
import { User } from "lucide-react"
import { useFileInput } from "."
import { useMemo } from "react"

type Props = {}

export function ImagePreview({}: Props) {
  const { files } = useFileInput()
  const previewURL = useMemo(() => {
    if (!files?.length) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewURL) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewURL}
      className="h-16 w-16 rounded-full object-cover"
      alt="Profile"
    />
  )
}
