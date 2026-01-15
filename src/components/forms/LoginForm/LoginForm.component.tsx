import { FormProvider, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

import type { LoginFormState } from "./LoginForm.types"
import { LoginFormSchema } from "./LoginForm.validation"
import type { ApiErrorResponse } from "@/api/api.types"
import { useLogin } from "@/api/auth/hooks/useLogin/useLogin"
import { Button } from "@/components/controls/button/Button.component"
import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { useYupResolver } from "@/hooks/useYupResolver"

export const LoginForm = () => {
  const { t } = useTranslation()
  const { mutateAsync, isPending } = useLogin()

  const form = useForm<LoginFormState>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit",
    resolver: useYupResolver(LoginFormSchema)
  })

  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    try {
      await mutateAsync({ email, password })
      
    } catch(err) {
      const error = err as ApiErrorResponse

      if (error.code === "invalid_credentials") {
        toast.error(t("errors:validation:invalid_credentials"))
        return
      }

      toast.error(t("errors:unexpected"))
    }
  })
  
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <TextFieldController
          name="email"
          label={t("user:emailLabel")}
          disabled={isPending}
        />

        <TextFieldController
          type="password"
          name="password"
          label={t("user:passwordLabel")}
          disabled={isPending}
        />

        <div className="border-muted-foreground my-4 border-t" />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          loading={isPending}
        >
          {t("user:login:submit")}
        </Button>
      </form>
    </FormProvider>
        
  )
}
