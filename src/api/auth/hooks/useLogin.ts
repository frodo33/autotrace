import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import { loginWithEmail } from "../auth.api"
import { useAuthStore } from "@/store/auth/auth.store"

export type LoginPostModel = {
  email: string
  password: string
}

export const useLogin = () => {
  const setSession = useAuthStore(state => state.setSession)
  const navigate = useNavigate()
  console.log("state", useAuthStore.getState())

  return useMutation({
    mutationFn: ({ email, password }: LoginPostModel) => loginWithEmail(email, password),
    onSuccess: (session) => {
      if (!session) return;
      console.log("session login", session)
      setSession(session.access_token, {
        id: session.user.id,
        email: session.user.email,
      })
      navigate({ to: "/" })
    }
  })
}