import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import UserDropdown from "./user-dropdown"
import { CiLight, CiDark } from "react-icons/ci"
import { useThemeProvider } from "@/providers/theme"
import { Button } from "./ui/button"
import { Icons } from "./icons"
import { ProjectSwitcher } from "./project-switcher"

export function Header() {
	const { setTheme, theme } = useThemeProvider()

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<div className="flex h-16 items-center justify-between border-b px-6">
			<div className="flex items-center gap-4">
				<Link
					to="/"
					className="relative z-20 flex items-center text-lg font-medium"
				>
					<Icons.logo className="mr-1 h-7 w-7" />
				</Link>
				<Separator orientation="vertical" className="h-5" />

				<ProjectSwitcher />

				<Separator orientation="vertical" className="h-5" />

				<nav className="flex items-center space-x-6">
					{/* <NavLink to="/">Home</NavLink>
					<NavLink to="/events">Events</NavLink>
					<NavLink to="/monitoring">Monitoring</NavLink>
					<NavLink to="/settings">Settings</NavLink> */}
				</nav>
			</div>

			<div className="flex items-center gap-4">
				<Button
					className="text-lg"
					variant="ghost"
					size="icon"
					onClick={toggleTheme}
				>
					{theme === "dark" ? <CiDark /> : <CiLight />}
				</Button>
				<UserDropdown />
			</div>
		</div>
	)
}
