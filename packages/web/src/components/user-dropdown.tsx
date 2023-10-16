import { User } from "@ven/contracts/dist/user"
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

interface Props {
	data?: User
}

export default function UserDropdown({ data }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 w-8 select-none rounded-full bg-primary/10"
				>
					<Avatar className="h-8 w-8">
						<AvatarImage src={data?.profile.picture} alt="user profile" />
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-2">
						<p className="text-sm font-medium leading-none">
							{[data?.profile.first_name, data?.profile.last_name].join(" ")}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{data?.email}
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
						<div>Sign Out</div>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
