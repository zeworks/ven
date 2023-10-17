import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Link } from "react-router-dom"
import { useSessionProvider } from "@/providers/session"

export default function UserDropdown() {
	const { session, clearSession } = useSessionProvider()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 w-8 select-none rounded-full bg-primary/10"
				>
					<Avatar className="h-8 w-8">
						<AvatarImage src={session?.profile.picture} alt="user profile" />
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-2">
						<p className="text-sm font-medium leading-none">
							{[session?.profile.first_name, session?.profile.last_name].join(
								" "
							)}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session?.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link to="/settings">Profile</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="">My teams</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="">Billing</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="">API Keys</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<div onClick={clearSession}>Sign Out</div>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
