import type { ComponentProps, ElementType, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

import type { typographyVariants } from "./Typography.styles"

type TypographyOwnProps <E extends ElementType = "p"> = {
  as?: E
  className?: string
  children: ReactNode
}

export type TypographyProps<E extends ElementType = "p"> = 
  VariantProps<typeof typographyVariants>
  & TypographyOwnProps<E>
  & Omit<ComponentProps<E>, keyof TypographyOwnProps>