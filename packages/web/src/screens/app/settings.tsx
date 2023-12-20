import { SidebarNav } from "@/components/sidear-nav"
import { Separator } from "@/components/ui/separator"
import { Route } from "@/config/types"
import { Outlet } from "react-router-dom"

const sidebarNavItems = [
	{
		title: "Account",
		href: Route.SettingsAccount,
	},
	{
		title: "Members",
		href: Route.SettingsMembers,
	},
	// {
	// 	title: "Appearance",
	// 	href: "/examples/forms/appearance",
	// },
	// {
	// 	title: "Notifications",
	// 	href: "/examples/forms/notifications",
	// },
	// {
	// 	title: "Display",
	// 	href: "/examples/forms/display",
	// },
]

export default function Settings() {
	return (
		<>
			<div className="space-y-1">
				<h2 className="text-2xl font-medium">Settings</h2>
				<span className="block text-muted-foreground">
					Manage your account settings and set e-mail preferences.
				</span>
			</div>
			<Separator className="my-6" />
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
				<aside className="-mx-4 lg:w-1/5">
					<SidebarNav items={sidebarNavItems} />
				</aside>
				<div className="flex-1 lg:max-w-2xl">
					<Outlet context="settings" />
				</div>
			</div>
		</>
	)
}
