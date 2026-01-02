import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";

import { redirectIfAuth, requireAuth } from "./guards";
import { PrivateLayout } from "../layouts/Private.layout";
import { PublicLayout } from "../layouts/Public.layout";
import { loginRoute } from "../pages/auth/LoginPage/Login.route";
import { registerRoute } from "../pages/auth/RegisterPage/Register.route";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage.page";

const rootRoute = createRootRoute({
  component: Outlet
})

export const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  component: PublicLayout,
  beforeLoad: redirectIfAuth,
})

export const privateLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "private",
  component: PrivateLayout,
  beforeLoad: requireAuth,
})

const dashboardRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: "/",
  component: DashboardPage
})

const aaaRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: "/aaa",
  component: DashboardPage
})

const bbbRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: "/bbb",
  component: DashboardPage
})

publicLayoutRoute.addChildren([
  loginRoute,
  registerRoute,
])

privateLayoutRoute.addChildren([
  dashboardRoute,
  aaaRoute,
  bbbRoute,
])

export const routeTree = rootRoute.addChildren([
  publicLayoutRoute,
  privateLayoutRoute,
])
