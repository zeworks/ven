import { HTMLAttributes } from "react"
import { Link, useLocation } from "react-router-dom"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
	items: Array<{
		href: string
		title: string
	}>
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
	const location = useLocation()

	return (
		<nav
			className={cn(
				"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
				className
			)}
			{...props}
		>
			{items.map((item) => (
				<Link
					key={item.href}
					to={item.href}
					className={cn(
						buttonVariants({ variant: "ghost" }),
						location.pathname === item.href
							? "bg-muted hover:bg-muted"
							: "hover:bg-transparent hover:underline",
						"justify-start"
					)}
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}
