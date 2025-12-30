import { Outlet } from "@tanstack/react-router"

import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { useTheme } from "../../hooks/useTheme/useTheme"

export const PublicLayout = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <div className="bg-popover fixed top-0 right-0 left-0 z-50 w-full shadow-2xl backdrop-blur-lg">
        <div className="flex h-14 items-center justify-between px-4 md:h-16">
          <div>public</div>
            
          <Label className="flex cursor-pointer items-center gap-2">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="cursor-pointer"
            />
            Dark mode
          </Label>
        </div>
      </div>
      
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
