import { type ComponentType } from "react"

export type NavItemProps = {
	name: string
	path: string
	Icon: ComponentType<{ className?: string }>
}