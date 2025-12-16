import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";

import { PrivateLayout } from "../layouts/Private.layout";
import { PublicLayout } from "../layouts/Public.layout";
import { LoginPage } from "../pages/auth/LoginPage/Login.page";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage.page";

const rootRoute = createRootRoute({
  component: Outlet
})

const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  component: PublicLayout,
})

const privateLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "private",
  component: PrivateLayout,
})

const loginRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "login",
  component: LoginPage
})

const dashboardRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: "/",
  component: DashboardPage
})

publicLayoutRoute.addChildren([
  loginRoute,
])

privateLayoutRoute.addChildren([
  dashboardRoute,
])

export const routeTree = rootRoute.addChildren([
  publicLayoutRoute,
  privateLayoutRoute,
])
