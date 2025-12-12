import type { JSX, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

import type { typographyVariants } from "./Typography.styles"

export type TypographyProps = VariantProps<typeof typographyVariants> & {
  as?: keyof JSX .IntrinsicElements
  className?: string
  children: ReactNode
}