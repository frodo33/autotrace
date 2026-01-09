import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import type { NavItemModel } from "../nav/nav.config"
import { Button } from "@/components/controls/button/Button.component"
import { Typography } from "@/components/controls/typography/Typography.component"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/useTheme/useTheme"
import { Routes } from "@/routes/router/routes.config"

export const UserMenu = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-9 w-9 rounded-full">
          AV
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-popover min-w-50 border-0 shadow-2xl backdrop-blur-lg">
        <DropdownMenuLabel className="flex items-center justify-between gap-4">
          <div>
            <Typography variant="p">Username</Typography>
            <Typography variant="small">test@test.pl</Typography>
          </div>
          <Button className="h-9 w-9 rounded-full">
          AV
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            to={Routes.PRIVATE.PROFILE}
            className="cursor-pointer"
          >
                  Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Label className="flex cursor-pointer items-center gap-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="cursor-pointer"
            />
            {t("common:switchModeLabel")}
          </Label>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          // className="text-destructive"
        >
      Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}