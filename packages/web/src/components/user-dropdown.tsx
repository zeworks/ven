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
import { Link, useNavigate } from "react-router-dom"
import { useSessionProvider } from "@/providers/session"

export default function UserDropdown() {
	const { session, clearSession } = useSessionProvider()
	const navigate = useNavigate()

	const onClearSession = () => {
		clearSession()
		navigate("/auth/sign-in")
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 w-8 select-none rounded-full bg-primary/10"
				>
					{session?.profile?.picture ? (
						<Avatar className="h-8 w-8">
							<AvatarImage
								src={session?.profile?.picture || ""}
								alt="user profile"
							/>
						</Avatar>
					) : (
						<div className="flex items-center justify-center w-100">
							{[
								session?.profile?.firstName[0],
								session?.profile?.lastName?.[0],
							].join(" ")}
						</div>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-2">
						<p className="text-sm font-medium leading-none">
							{[session?.profile?.firstName, session?.profile?.lastName].join(
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
						<div onClick={onClearSession}>Sign Out</div>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
