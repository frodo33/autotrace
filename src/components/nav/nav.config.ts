import type { ComponentType } from "react"
import { History, Home } from "lucide-react"

export type NavItemModel = {
	path: string
	name: string
	Icon: ComponentType<{ className?: string }>
}

export const navConfig = () => [
  {
    name: "Home",
    path: "/",
    Icon: Home,
  },
  {
    name: "History",
    path: "/aaa",
    Icon: History,
  },
  {
    name: "Home",
    path: "/bbb",
    Icon: History,
  },
  {
    name: "Cars",
    path: "/history",
    Icon: History,
  },
  {
    name: "Settings",
    path: "/history",
    Icon: History,
  },
]