import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"

import { routeTree } from "./routes/router/router"

import "./index.css"
import "./theme/theme.css"

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

export const AppProvider = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
