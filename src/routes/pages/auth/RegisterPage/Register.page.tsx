import { Link } from "@tanstack/react-router"
import { FormProvider, useForm } from "react-hook-form"

import { useRegister } from "@/api/auth/hooks/useRegister"
import { Button } from "@/components/controls/button/Button.component"
import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { Typography } from "@/components/controls/typography/Typography.component"

export const RegisterPage = () => {
  const { mutateAsync, isPending } = useRegister()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      cPassword: "",
    },
    mode: "all",
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    console.log(values, "lelel")
    const payload = {
      email: values.email,
      password: values.password,
    }
    try {
      const response = await mutateAsync(payload)
      console.log({ response })
    } catch(err) {
      console.log({ err })
    }
  })
  
  return (
    <>
      <div className="bg-popover border-popover-border w-full max-w-md rounded-3xl border p-6 shadow-2xl backdrop-blur-lg">
        <Typography variant="h1">Welcome</Typography>
        <Typography variant="p">Create an account to continue</Typography>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit} className="mt-6">
            <TextFieldController
              name="email"
              label="Email"
              className="mb-4"
            />
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

            <div className="border-muted-foreground my-8 border-t" />

            <Button type="submit" size="lg" className="w-full">Create account</Button>
          </form>
        </FormProvider>

        <div className="flex items-center justify-center">
          <Typography variant="small">Already have an account?&nbsp;</Typography>
          <Button type="submit" variant="link" className="p-0 text-xs" asChild>
            {/* TODO: path as variable */}
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
