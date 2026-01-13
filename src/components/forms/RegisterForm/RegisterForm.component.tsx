import { FormProvider, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import type { RegisterFormState } from "./RegisterForm.types"
import { RegisterFormSchema } from "./RegisterForm.validation"
import { useRegister } from "@/api/auth/hooks/useRegister/useRegister"
import { Button } from "@/components/controls/button/Button.component"
import { TextFieldController } from "@/components/controls/textFieldController/TextFieldController.component"
import { useFormErrorHandler } from "@/hooks/useFormErrorHandler/useFormErrorHandler"
import { useYupResolver } from "@/hooks/useYupResolver"

export const RegisterForm = () => {
  const { t } = useTranslation()
  const { mutateAsync, isPending } = useRegister()
  const form = useForm<RegisterFormState>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      cPassword: "",
    },
    mode: "all",
    resolver: useYupResolver(RegisterFormSchema)
  })
  const { handleError } = useFormErrorHandler(form)

  const handleSubmit = form.handleSubmit(async ({ email, password, username }) => {
    try {
      await mutateAsync({ email, password, username })
    } catch(err) {
      handleError(err)
    }
  })
  
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <TextFieldController
          name="username"
          label={t("user:usernameLabel")}
          disabled={isPending}
        />
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
        <TextFieldController
          type="password"
          name="cPassword"
          label={t("user:cPasswordLabel")}
          disabled={isPending}
        />

        <div className="border-muted-foreground my-4 border-t" />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          loading={isPending}
        >
          {t("user:register:submit")}
        </Button>
      </form>
    </FormProvider>
  )
}
