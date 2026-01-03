import { createRoute } from "@tanstack/react-router"

import { RegisterPage } from "./Register.page"
import { publicLayoutRoute } from "@/routes/router/router"
import { Routes } from "@/routes/router/routes.config"

export const registerRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: Routes.PUBLIC.REGISTER,
  component: RegisterPage
})