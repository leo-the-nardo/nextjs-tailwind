import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.tsx"],
  plugins: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr max-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },
      animation: {
        slideDownAndFade: "slideDownAndFade 0.5s ease-in-out",
        slideUpAndFade: "slideUpAndFade 0.5s ease-in-out",
      },
      keyframes: {
        slideDownAndFade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slideUpAndFade: {},
      },
    },
  },
}
export default config
