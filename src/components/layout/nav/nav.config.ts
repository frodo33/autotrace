import type { ComponentType } from "react"
import type { TFunction } from "i18next"
import { History, LayoutDashboard, Settings } from "lucide-react"

import { Routes } from "@/routes/router/routes.config"

export type NavItemModel = {
	path: string
	name: string
	Icon: ComponentType<{ className?: string }>
}

export const navConfig = (t: TFunction): NavItemModel[] => [
  {
    name: t("nav:dashboard"),
    path: Routes.PRIVATE.DASHBOARD,
    Icon: LayoutDashboard,
  },
  {
    name: t("nav:history"),
    path: Routes.PRIVATE.HISTORY,
    Icon: History,
  },
  {
    name: t("nav:settings"),
    path: Routes.PRIVATE.SETTINGS,
    Icon: Settings,
  },
]