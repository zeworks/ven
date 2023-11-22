import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import UserDropdown from "./user-dropdown"
import { CiLight, CiDark } from "react-icons/ci"
import { useThemeProvider } from "@/providers/theme"
import { Button } from "./ui/button"
import { Icons } from "./icons"

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
					<Icons.logo className="mr-2 h-7 w-7" />
				</Link>

				<Separator orientation="vertical" className="h-5" />
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
