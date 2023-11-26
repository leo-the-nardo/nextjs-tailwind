import { ComponentProps } from "react"

type Props = ComponentProps<"input">

export function Control(props: Props) {
  return <input className="sr-only" id="photo" type="file" />
}
