import type { TextFieldProps } from "../textField/TextField.types"

export type TextFieldControllerProps = Omit<TextFieldProps, "value" | "onChange" | "id"> & {
  name: string
}