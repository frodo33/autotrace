import { redirect } from "@tanstack/react-router"

import { useAuthStore } from "@/store/auth/auth.store"

export const requireAuth = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (!isAuthenticated) throw redirect({ to: "/login" })
}

export const redirectIfAuth = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (isAuthenticated) throw redirect({ to: "/" })
}