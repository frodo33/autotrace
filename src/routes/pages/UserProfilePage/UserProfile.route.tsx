import { createRoute } from "@tanstack/react-router";

import { UserProfile } from "./UserProfile.page";
import { privateLayoutRoute } from "@/routes/router/router";
import { Routes } from "@/routes/router/routes.config";

export const userProfileRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: Routes.PRIVATE.PROFILE,
  component: UserProfile,
})