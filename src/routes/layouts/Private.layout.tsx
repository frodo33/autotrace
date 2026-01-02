import { Outlet } from "@tanstack/react-router"

import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { navConfig } from "@/components/nav/nav.config"
import { NavDesktop } from "@/components/nav/navDesktop/NavDesktop.component"
import { NavMobile } from "@/components/nav/navMobile/NavMobile.component"

export const PrivateLayout = () => {
  const { theme, toggleTheme } = useTheme()
  const navItems = navConfig()

  return (
    <div className="grid min-h-screen md:grid-cols-[auto_1fr]">
      <div className="sticky top-0 hidden h-screen md:flex">
        <NavDesktop navItems={navItems} />
      </div>

      <div className="flex flex-col">
        <div className="sticky top-0 z-50 mb-4 flex h-14 items-center justify-between rounded-b-md px-4 backdrop-blur-xl md:mx-4">
          <NavMobile navItems={navItems} />
          <Label className="flex cursor-pointer items-center gap-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="cursor-pointer"
            />
        Dark mode
          </Label>
        </div>

        <div className="bg-card mx-4 flex-1 overflow-auto rounded-2xl p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}