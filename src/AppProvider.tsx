import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"

import "./index.css"
import "./theme/theme.css"
import { useSession } from "./api/auth/hooks/useSession"
import { router } from "./routes/router/router"
import { useAuthStore } from "./store/auth/auth.store"

const queryClient = new QueryClient()

export const AppProvider = () => {
  useSession()
  const isLoading = useAuthStore(state => state.isLoadingSession)

  if (isLoading) {
    return <div>loading...............</div>
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
