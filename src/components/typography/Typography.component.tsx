import { typographyVariants } from "./Typography.styles"
import type { TypographyProps } from "./Typography.types"
import { variantToTag } from "./Typography.utils"
import { cn } from "@/lib/utils"

export const Typography = ({
  as,
  variant,
  className,
  children
}: TypographyProps) => {
  const Comp = as || (variant ? variantToTag[variant] : "p")
  
  return (
    <Comp className={cn(typographyVariants({ variant }), className)}>
      {children}
    </Comp>
  )
}
