import { Input } from "@/components/Input"
import { SettingsTabs } from "@/components/SettingsTabs"
import * as Tabs from "@radix-ui/react-tabs"
import { Mail } from "lucide-react"

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

        <form
          id="my-details"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="grid-cols-form grid gap-3">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="firstName">
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Olivia" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Rhye" />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="email">
              Email
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  type="email"
                  id="email"
                  defaultValue="olivia@untitledui.com"
                />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="email">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="grid grid-cols-1 gap-6">
              <div></div>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="role">
              Role
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Input.Root>
                <Input.Control
                  type="role"
                  id="role"
                  defaultValue="Product Designer"
                />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="country">
              Country
            </label>
            <div className="grid grid-cols-1 gap-6"></div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="timezone">
              Timezone
            </label>
            <div className="grid grid-cols-1 gap-6"></div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="email">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="grid grid-cols-1 gap-6">
              <div></div>
            </div>
            <div />
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="email">
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div className="grid grid-cols-1 gap-6">
              <div></div>
            </div>
            <div />
          </div>

          <div className=" flex flex-row items-center justify-end gap-3 pt-5">
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
          {/*  */}
        </form>
      </div>
    </>
  )
}
