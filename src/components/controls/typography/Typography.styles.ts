import { cva } from "class-variance-authority"

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-3xl leading-tight font-bold tracking-tight",
      h2: "text-2xl leading-snug font-semibold tracking-tight",
      h3: "text-xl leading-snug font-semibold tracking-tight",
      p: "text-base leading-7",
      small: "text-xs leading-none font-medium",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})