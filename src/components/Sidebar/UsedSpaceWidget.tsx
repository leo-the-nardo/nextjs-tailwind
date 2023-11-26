import React from "react"

type Props = {}

export default function UsedSpaceWidget({}: Props) {
  return (
    <div className="flex flex-col bg-violet-100 px-4 py-5">
      <strong className="text-sm/5 font-medium text-violet-700 ">
        Used space
      </strong>
      <p className=" text-sm/5 font-medium text-violet-500">
        Your team has used 80% of your available space. Need more?
      </p>

      <div className="my-4 h-2 rounded-full bg-violet-200">
        <div className="h-2 w-[80%] rounded-full bg-violet-600"></div>
      </div>

      <div className="flex flex-row gap-3 ">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 hover:brightness-75">
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium  text-violet-700 hover:brightness-75">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
