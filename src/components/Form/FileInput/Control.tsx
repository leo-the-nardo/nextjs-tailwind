"use client"
import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "."

type Props = ComponentProps<"input">

export function Control(props: Props) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (!files?.length) {
      return
    }
    const filesList = Array.from(files)
    onFilesSelected(filesList)
  }

  return (
    <input
      type="file"
      onChange={handleFilesSelected}
      className="sr-only"
      id={id}
      {...props}
    />
  )
}
