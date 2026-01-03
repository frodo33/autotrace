import { createRootRoute, createRoute, createRouter, Navigate, Outlet } from "@tanstack/react-router";

import { redirectIfAuth, requireAuth } from "./guards";
import { Routes } from "./routes.config";
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
  path: Routes.PRIVATE.DASHBOARD,
  component: DashboardPage
})

const aaaRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: Routes.PRIVATE.AAA,
  component: DashboardPage
})

const bbbRoute = createRoute({
  getParentRoute: () => privateLayoutRoute,
  path: Routes.PRIVATE.BBB,
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

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <Navigate to="/" replace />
})
