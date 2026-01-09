import { Outlet } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { AppHeader } from "@/components/layout/AppHeader/AppHeader.component"
import { navConfig } from "@/components/layout/nav/nav.config"
import { NavDesktop } from "@/components/layout/nav/navDesktop/NavDesktop.component"
import { NavMobile } from "@/components/layout/nav/navMobile/NavMobile.component"

export const PrivateLayout = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const navItems = navConfig(t)

  return (
    <div className="grid min-h-screen md:grid-cols-[auto_1fr]">
      <div className="sticky top-0 hidden h-screen md:flex">
        <NavDesktop navItems={navItems} />
      </div>

      <div className="flex flex-col">
        <AppHeader navItems={navItems} />

        <div className="bg-card mx-4 flex-1 overflow-auto rounded-2xl p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}