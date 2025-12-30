import { createRoute } from "@tanstack/react-router"

import { RegisterPage } from "./Register.page"
import { publicLayoutRoute } from "@/routes/router/router"

export const registerRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "register",
  component: RegisterPage
})