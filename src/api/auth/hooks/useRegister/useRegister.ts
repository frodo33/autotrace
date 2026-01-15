import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

import { loginWithEmail, registerUser } from "../../auth.api"
import { Routes } from "@/routes/router/routes.config"

export const useRegister = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return useMutation({
    mutationFn: registerUser,
    onSuccess: async (_data, variables) => {
      try {
        await loginWithEmail({
          email: variables.email,
          password: variables.password,
        })

        navigate({ to: Routes.PRIVATE.DASHBOARD })
      } catch {
        toast.error(t("errors:unexpected"))
        navigate({ to: Routes.PUBLIC.LOGIN })
      }
    }
  })
}