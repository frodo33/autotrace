import { createRouter, RouterProvider } from "@tanstack/react-router"

import "./index.css"
import "./theme/theme.css"
import { routeTree } from "./routes/router/router"

const router = createRouter({ routeTree })

export const AppProvider = () => (
  <RouterProvider router={router} />
)
