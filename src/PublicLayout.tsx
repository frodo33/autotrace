import type { ReactNode } from "react"

import { Label } from "./components/ui/label"
import { Switch } from "./components/ui/switch"
import { useTheme } from "./hooks/useTheme/useTheme"
import { GlassDemo } from "./showTheme"

export type PublicLayoutProps = {
  children: ReactNode
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <div className="flex h-14 items-center justify-between md:h-16">
        <div>logo</div>
            
        <Label className="flex cursor-pointer items-center gap-2">
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="cursor-pointer"
          />
            Dark mode
        </Label>
      </div>
      
      <div className="flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  )
}
