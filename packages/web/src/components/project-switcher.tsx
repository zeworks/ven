import { useSessionProvider } from "@/providers/session"
import { useProject, useProjects } from "@/services/project"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { ComponentPropsWithoutRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "./ui/command"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Skeleton } from "./ui/skeleton"

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>
type ProjectSwitcherProps = PopoverTriggerProps

export function ProjectSwitcher({ className }: ProjectSwitcherProps) {
	const [open, setOpen] = useState(false)

	const session = useSessionProvider()
	const { project: currentProject, isLoaded: isCurrentProjectLoaded } =
		useProject()
	const projects = useProjects()

	const isLoading = !session

	const user = session?.session

	return (
		<Dialog open>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger disabled asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Select a team"
						className={twMerge("w-[200px] items-center gap-2", className)}
						disabled={!isCurrentProjectLoaded}
					>
						{isLoading ? (
							<>
								<Skeleton className="h-5 w-5 rounded-full bg-primary/30" />
								<Skeleton className="h-3 w-32 bg-primary/30" />
							</>
						) : !currentProject ? (
							<>
								<Avatar className="h-5 w-5">
									{user?.profile?.picture ? (
										<AvatarImage src={user?.profile?.picture} />
									) : (
										<AvatarFallback>
											{[user?.profile?.firstName, user?.profile?.lastName]}
										</AvatarFallback>
									)}
								</Avatar>
								<span className="text-xs text-muted-foreground">
									{user?.profile?.firstName ?? "Personal"}
								</span>
							</>
						) : (
							<>
								<Avatar className="h-5 w-5">
									<AvatarImage src={currentProject?.imageUrl} />
								</Avatar>
								<span className="text-xs text-muted-foreground">
									{currentProject?.name}
								</span>
							</>
						)}
						{/* {isSettingOrganization ? (
							<Loader2 className="ml-auto h-4 w-4 shrink-0 animate-spin opacity-30" />
						) : (
							<CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
						)} */}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandList>
							<CommandInput placeholder="Search team..." />
							<CommandEmpty>No team found.</CommandEmpty>
							<CommandGroup heading="Personal">
								{/* <CommandItem
									onSelect={() => setCurrentOrganization(null)}
									className="gap-2"
								>
									<Avatar className="h-5 w-5">
										<AvatarImage src={user?.imageUrl} />
									</Avatar>
									<span className="text-xs text-muted-foreground">
										{user?.fullName}
									</span>
									{currentOrganization === null && (
										<CheckIcon className="ml-auto h-4 w-4" />
									)}
								</CommandItem> */}
							</CommandGroup>
							<CommandGroup heading="Teams">
								{/* {organizationList?.map(({ organization }) => {
									return (
										<CommandItem
											onSelect={() => setCurrentOrganization(organization.id)}
											key={organization.id}
											className="gap-2"
										>
											<Avatar className="h-5 w-5">
												<AvatarImage src={organization.imageUrl} />
												<AvatarFallback>SC</AvatarFallback>
											</Avatar>
											<span className="text-xs text-muted-foreground">
												{organization.name}
											</span>
											{organization.id === currentOrganization?.id && (
												<CheckIcon className="ml-auto h-4 w-4" />
											)}
										</CommandItem>
									)
								})} */}
							</CommandGroup>
						</CommandList>
						<CommandSeparator />
						<CommandList>
							<CommandGroup>
								<DialogTrigger asChild>
									<CommandItem
										className="gap-2 py-2 text-xs"
										onSelect={() => {
											setOpen(false)
										}}
									>
										<PlusCircledIcon className="h-4 w-4" />
										Create Team
									</CommandItem>
								</DialogTrigger>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</Dialog>
	)
}
