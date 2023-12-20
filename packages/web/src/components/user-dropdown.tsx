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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Link, useNavigate } from "react-router-dom"
import { useSessionProvider } from "@/providers/session"
import { Route } from "@/config/types"

export default function UserDropdown() {
	const { session, clearSession, isRoleAdmin } = useSessionProvider()
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
					<Avatar className="h-8 w-8">
						{session?.profile?.picture ? (
							<AvatarImage
								src={session?.profile?.picture || ""}
								alt="user profile"
							/>
						) : (
							<AvatarFallback>
								{[
									session?.profile?.firstName[0],
									session?.profile?.lastName?.[0],
								].join("")}
							</AvatarFallback>
						)}
					</Avatar>
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
						<Link to={Route.SettingsAccount}>Account</Link>
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
					{isRoleAdmin && (
						<DropdownMenuItem asChild>
							<Link to={Route.SettingsAccount}>Settings</Link>
						</DropdownMenuItem>
					)}
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
