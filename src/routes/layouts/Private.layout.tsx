import { Outlet } from "@tanstack/react-router"

import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { useLogout } from "@/api/auth/hooks/useLogout"

export const PrivateLayout = () => {
  const { theme, toggleTheme } = useTheme()
  const logout = useLogout()

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <div className="flex h-14 items-center justify-between md:h-16">
        <div>private</div>
            
        <Label className="flex cursor-pointer items-center gap-2">
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="cursor-pointer"
          />
            Dark mode
        </Label>
      </div>

      <button onClick={() => logout.mutate()}>logout</button>
      
      <div className="flex flex-1 items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  )
}
