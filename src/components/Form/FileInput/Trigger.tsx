import { UploadCloud } from "lucide-react"

type Props = {}

export function Trigger({}: Props) {
  return (
    <label
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-[#fcfaff]"
      htmlFor="photo">
      <div className="rounded-full border-4 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1 ">
        <p className="text-sm">
          <strong className="font-semibold text-violet-700">
            Click to upload {""}
          </strong>
          or drag and drop
        </p>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
