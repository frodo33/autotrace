import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/common/Button/Button.component"
import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { Typography } from "@/components/common/Typography/Typography.component"

export const ChangePasswordForm = () => {
//   const login = useLogin()
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
      <Typography variant="h2">Change password</Typography>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="mt-4">
          <TextFieldController
            type="password"
            name="password"
            label="Password"
            className="mb-4"
          />
          <TextFieldController
            type="password"
            name="cPassword"
            label="Confirm password"
            className="mb-4"
          />

          {/* <div className="border-muted-foreground my-4 border-t" /> */}

          <div className="flex gap-4">
            <Button variant="destructive" className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
