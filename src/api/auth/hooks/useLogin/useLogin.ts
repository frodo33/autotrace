import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import { loginWithEmail } from "../../auth.api"
import { Routes } from "@/routes/router/routes.config"

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: () => navigate({ to: Routes.PRIVATE.DASHBOARD })
  })
}