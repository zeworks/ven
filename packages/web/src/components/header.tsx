import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import UserDropdown from "./user-dropdown"
import { User } from "@ven/contracts/dist/user"
import { CiLight, CiDark } from "react-icons/ci"
import { useTheme } from "@/providers/theme-provider"
import { Button } from "./ui/button"

const fakeUser: User = {
	id: "1",
	profile: {
		first_name: "Dake",
		last_name: "Kang",
		picture: "https://avatars.githubusercontent.com/u/25190563?v=4",
	},
	createdAt: new Date(),
	email: "dake@mail.com",
	username: "dakekang",
}

export function Header() {
	const { setTheme, theme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<div className="flex h-16 items-center justify-between border-b px-6">
			<div className="flex items-center gap-4">
				<Link to="/">logo here</Link>

				<Separator orientation="vertical" className="h-5" />
			</div>

			<div className="flex items-center gap-4">
				<Button
					className="text-lg"
					variant="ghost"
					size="icon"
					onClick={toggleTheme}
				>
					{theme === "dark" ? <CiLight /> : <CiDark />}
				</Button>
				<UserDropdown data={fakeUser} />
			</div>
		</div>
	)
}
