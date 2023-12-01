import { NavLink as Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
	const { pathname } = useLocation()

	const isActive = pathname === props.to

	return (
		<Link
			data-active={isActive}
			className={twMerge(
				"text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary",
				props.className as string
			)}
			{...props}
		/>
	)
}
