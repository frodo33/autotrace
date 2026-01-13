import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

import { registerUser } from "../../auth.api"
import { Routes } from "@/routes/router/routes.config"
import { supabase } from "@/services/supabaseClient"

export const useRegister = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return useMutation({
    mutationFn: registerUser,
    onSuccess: async (_data, variables) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: variables.email,
        password: variables.password,
      })

      if (error) {
        toast.error(t("errors:unexpected"))
        navigate({ to: Routes.PUBLIC.LOGIN })
        return
      }

      navigate({ to: Routes.PRIVATE.DASHBOARD })
    }
  })
}