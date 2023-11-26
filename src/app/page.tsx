import { SettingsTabs } from "@/components/SettingsTabs"
import * as Tabs from "@radix-ui/react-tabs"
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col bg-slate-100">
        <div className="flex flex-row items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your personal details here
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50">
              Cancel
            </button>
            <button
              form="my-detail"
              type="submit"
              className="rounded-lg  bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700">
              Save
            </button>
          </div>
        </div>

        <form id="my-details"></form>
      </div>
    </>
  )
}
