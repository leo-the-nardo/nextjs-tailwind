import { Input } from "@/components/Input"
import { SettingsTabs } from "@/components/SettingsTabs"
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react"
import * as FileInput from "@/components/Form/FileInput"
import { Select } from "@/components/Form/Select"
import { SelectItem } from "@/components/Form/Select/SelectItem"
import { Textarea } from "@/components/Form/Textarea"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col ">
        <div className="flex flex-row items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your personal details here
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button form="my-detail" type="submit">
              Save
            </Button>
          </div>
        </div>

        <form
          id="my-details"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-3">
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
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
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
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="photo">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-row items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
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
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="country">
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem text="Brasil" value="br" />
              <SelectItem text="United States" value="br" />
              <SelectItem text="Russia" value="br" />
              <SelectItem text="Alemanha" value="br" />
              <SelectItem text="Canadá" value="br" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="timezone">
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem text="Brasil" value="br" />
              <SelectItem text="United States" value="br" />
              <SelectItem text="Russia" value="br" />
              <SelectItem text="Alemanha" value="br" />
              <SelectItem text="Canadá" value="br" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="email">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className=" text-sm font-medium text-zinc-700"
              htmlFor="projects">
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className=" ">
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className=" flex flex-row items-center justify-end gap-3 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button form="my-detail" type="submit">
              Save
            </Button>
          </div>
          {/*  */}
        </form>
      </div>
    </>
  )
}
