import { createRoute } from "@tanstack/react-router";

import { LoginPage } from "./Login.page";
import { publicLayoutRoute } from "@/routes/router/router";

export const loginRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "login",
  component: LoginPage,
})