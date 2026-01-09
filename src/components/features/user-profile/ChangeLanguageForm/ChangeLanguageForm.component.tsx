import { FormProvider, useForm } from "react-hook-form"

import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { Typography } from "@/components/controls/typography/Typography.component"

export const ChangeLanguageForm = () => {
  const form = useForm({
    defaultValues: {
      password: "",
      cPassword: "",
    },
    mode: "all",
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    console.log({ values })
    try {} catch(err) { console.log("error", { err }) }
  })
  
  return (
    <div>
      <Typography variant="h2">Interface</Typography>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="mt-4">
          <TextFieldController
            name="password"
            label="Language"
            className="mb-4"
          />
        </form>
      </FormProvider>
    </div>
  )
}
