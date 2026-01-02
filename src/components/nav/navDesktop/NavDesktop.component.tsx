import type { NavItemModel } from "../nav.config"
import { NavItem } from "../navItem/NavItem.component"

export const NavDesktop = ({ navItems }: { navItems: NavItemModel[] }) => (
  <nav className="mt-14 ml-4 hidden min-w-50 md:mt-16 md:flex">
    <ul className="w-full">
      {navItems.map(({ name, path, Icon }) => (
        <li key={path} className="w-full">
          <NavItem
            name={name}
            path={path}
            Icon={Icon}
          />
        </li>
      ))}
    </ul>
  </nav>
)