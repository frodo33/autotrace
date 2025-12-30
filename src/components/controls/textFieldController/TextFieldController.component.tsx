import type { ChangeEvent } from "react"
import { useController } from "react-hook-form"

import type { TextFieldControllerProps } from "./TextFieldController.types"
import { TextField } from "../textField/TextField.component"

export const TextFieldController = ({ name, ...props }: TextFieldControllerProps) => {
  const { field, fieldState: { error, invalid } } = useController({ name })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => field.onChange(e.target.value)
  
  return (
    <TextField
      {...props}
      id={name}
      value={field.value ?? ""}
      onChange={handleChange}
      invalid={invalid}
      helperText={error?.message ?? props.helperText}
    />
  )
}
