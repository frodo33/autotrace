import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import { logout } from "../auth.api"
import { useAuthStore } from "@/store/auth/auth.store"

export const useLogout = () => {
  const queryClient = useQueryClient()
  const reset = useAuthStore(state => state.reset)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      reset()
      queryClient.clear()
      navigate({ to: "/login" })
    },
  })
}