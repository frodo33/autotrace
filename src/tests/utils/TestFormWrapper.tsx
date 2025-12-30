import type { ReactNode } from "react"
import { FormProvider, useForm, type FieldValues, type UseFormProps } from "react-hook-form"

type TestFormWrapperProps<T extends FieldValues> = {
  children: ReactNode
  onSubmit: (data: T) => void
} & UseFormProps<T>

export const TestFormWrapper = <T extends FieldValues>({ children, onSubmit, ...formProps }: TestFormWrapperProps<T>) => {
  const form = useForm<T>({ mode: "onTouched", ...formProps })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}