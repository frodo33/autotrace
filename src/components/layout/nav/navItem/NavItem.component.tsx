import { forwardRef } from "react"
import { Link } from "@tanstack/react-router"

import type { NavItemProps } from "./NavItem.types"

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(({ name, path, Icon, ...props }, ref) => (
  <Link
    to={path}
    ref={ref}
    {...props}
    className="hover:bg-muted mb-2 flex w-full rounded-md p-2"
    activeProps={{
      className: "bg-primary text-primary-foreground hover:bg-primary",
    }}
    activeOptions={{ exact: true }}
  >
    <Icon className="mr-2" />
    {name}
  </Link>
))

NavItem.displayName = "NavItem"