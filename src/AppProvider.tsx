import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { I18nextProvider } from "react-i18next"
import { ToastContainer, type ToastContainerProps } from "react-toastify";

import "./index.css"
import "./theme/theme.css"

import { useSession } from "./api/auth/hooks/useSession"
import { router } from "./routes/router/router"
import i18n from "./services/i18n/i18n"
import { useAuthStore } from "./store/auth/auth.store"

const queryClient = new QueryClient()

export const AppProvider = () => {
  useSession()
  const isLoading = useAuthStore(state => state.isLoadingSession)
  console.log("STORE", useAuthStore.getState())

  const toastProps: ToastContainerProps = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
    limit: 3,
    icon: false,
  }

  if (isLoading) {
    return <div>loading...............</div>
  }
  
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer {...toastProps} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </I18nextProvider>
  )
}
