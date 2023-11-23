export default function Home() {
  return (
    <div className=" flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100 ">
      <div className="max-w-2xl">
        <h1 className=" flex items-center gap-3 text-4xl font-bold sm:text-4xl lg:text-5xl">
          Lorem ipsum dolor sit amet, consectetur
        </h1>

        <p className="mt-4 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          facilis cumque, natus deserunt non illo iusto nam voluptate aperiam
          impedit, modi asperiores quis temporibus tempora dicta atque nemo
          inventore animi!
        </p>

        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
          Sign in
        </button>
      </div>
    </div>
  )
}
