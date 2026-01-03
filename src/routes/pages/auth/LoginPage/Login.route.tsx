import { createRoute } from "@tanstack/react-router";

import { LoginPage } from "./Login.page";
import { publicLayoutRoute } from "@/routes/router/router";
import { Routes } from "@/routes/router/routes.config";

export const loginRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: Routes.PUBLIC.LOGIN,
  component: LoginPage,
})