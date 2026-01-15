import { LogOutIcon, MenuIcon  } from "lucide-react"

import { type NavItemModel } from "../nav.config"
import { NavItem } from "../navItem/NavItem.component"
import { useLogout } from "@/api/auth/hooks/useLogout"
import { Button } from "@/components/common/Button/Button.component"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export const NavMobile = ({ navItems }: { navItems: NavItemModel[] }) => {
  const { mutate } = useLogout()
  const handleLogout = () => mutate()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Your car</SheetTitle>
          <SheetDescription>
                  some car
          </SheetDescription>
        </SheetHeader>

        <nav className="flex-1 px-4">
          <ul>
            {navItems.map(({ name, path, Icon }) => (
              <li key={path} className="w-full">
                <SheetClose asChild>
                  <NavItem
                    name={name}
                    path={path}
                    Icon={Icon}
                  />
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <SheetFooter className="flex-row-reverse">
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            <LogOutIcon />
            Log out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}