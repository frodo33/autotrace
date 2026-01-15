import type { ComponentProps } from "react"

import type { TextFieldOwnProps, TextFieldProps } from "./TextField.types"
import { Typography } from "../../common/Typography/Typography.component"
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export const TextField = <T extends boolean = false>({
  id,
  label,
  placeholder,
  value,
  onChange,
  invalid,
  helperText,
  className,
  inputGroupClassName,
  addons,
  textarea,
  ...props
}: TextFieldProps<T>) => {
  const helperId = helperText ? `${id}-helper` : undefined
  
  return (
    <div className={className}>
      {label && <Label htmlFor={id} className="mb-1 text-xs">{label}</Label>}
      <InputGroup
        data-disabled={props.disabled}
        className={cn(
          "[&:has([data-slot=input-group-control]:focus-visible)]:border-ring/70 [&:has([data-slot=input-group-control]:focus-visible)]:ring-0",
          props.disabled && "bg-muted dark:bg-muted cursor-not-allowed",
          inputGroupClassName
        )}
      >
        {textarea ? (
          <InputGroupTextarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={!!invalid}
            aria-describedby={helperId}
            {...(props as Omit<ComponentProps<"textarea">, keyof TextFieldOwnProps>)}
          />
        ) : (
          <InputGroupInput
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={!!invalid}
            aria-describedby={helperId}
            {...(props as Omit<ComponentProps<"input">, keyof TextFieldOwnProps>)}
          />
        )}
        {addons}
      </InputGroup>

      {!!helperText && (
        <Typography
          id={`${id}-helper`}
          role={invalid ? "alert" : undefined}
          variant="small"
          className={cn(
            "mt-1 mr-auto text-left text-xs whitespace-pre-line",
            invalid ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {helperText}
        </Typography>
      )}
    </div>
  )
}
