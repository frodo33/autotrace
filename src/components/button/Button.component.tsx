import { Slot } from "@radix-ui/react-slot"

import { buttonVariants } from "./Button.styles"
import type { ButtonProps } from "./Button.types"
import { ButtonSpinner } from "./ButtonSpinner.component"
import { cn } from "@/lib/utils"

export const Button = ({
  className,
  variant,
  size,
  loading,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      <span className="inline-flex h-full w-full items-center justify-center gap-2">
        {loading ? <ButtonSpinner /> : null}
        {props.children}
      </span>
    </Comp>
  )
}
