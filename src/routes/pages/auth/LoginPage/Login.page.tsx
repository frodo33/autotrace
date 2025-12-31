import { Link } from "@tanstack/react-router"
import { FormProvider, useForm } from "react-hook-form"

import { useLogin } from "@/api/auth/hooks/useLogin"
import { Button } from "@/components/controls/button/Button.component"
import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { Typography } from "@/components/controls/typography/Typography.component"

export const LoginPage = () => {
  const login = useLogin()
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "all",
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    try {
      await login.mutateAsync({ email: values.email, password: values.password })
      
    } catch(err) {
      console.log("error", { err })
    }
  })
  
  return (
    <>
      <div className="bg-popover border-popover-border w-full max-w-md rounded-3xl border p-6 shadow-2xl backdrop-blur-lg">
        <Typography variant="h1">Welcome Back</Typography>
        <Typography variant="p">Log in to continue and access your account</Typography>
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

            <div className="border-muted-foreground my-8 border-t" />

            <Button type="submit" size="lg" className="w-full">Create account</Button>
          </form>
        </FormProvider>
        
        <div className="flex items-center justify-center">
          <Typography variant="small">Don&apos;t have an account?&nbsp;</Typography>
          <Button type="submit" variant="link" className="p-0 text-xs" asChild>
            {/* TODO: path as variable */}
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
