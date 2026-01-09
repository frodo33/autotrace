import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import type { NavItemModel } from "../nav/nav.config"
import { UserMenu } from "./UserMenu/UserMenu.component"
import { NavMobile } from "../nav/navMobile/NavMobile.component"
import { Button } from "@/components/controls/button/Button.component"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/useTheme/useTheme"
import { Routes } from "@/routes/router/routes.config"

export const AppHeader = ({ navItems }: { navItems: NavItemModel[] }) => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="sticky top-0 z-50 mb-4 flex h-14 items-center justify-between rounded-b-md px-4 backdrop-blur-xl md:mx-4">
      <div className="md:hidden">
        <NavMobile navItems={navItems} />
      </div>

      <div className="ml-auto flex items-center gap-4">

        <UserMenu />
      </div>
    </div>
  )
}