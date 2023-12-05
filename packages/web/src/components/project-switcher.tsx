import { useSessionProvider } from "@/providers/session"
import { useProjectQuery } from "@/services/project"
import { CaretSortIcon, PlusCircledIcon } from "@radix-ui/react-icons"
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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Skeleton } from "./ui/skeleton"
import { NewProjectDialog } from "./new-project-dialog"

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>
type ProjectSwitcherProps = PopoverTriggerProps

export function ProjectSwitcher({ className }: ProjectSwitcherProps) {
	const [open, setOpen] = useState(false)
	const [openNewProject, setOpenNewProject] = useState(false)

	const session = useSessionProvider()
	const { project: currentProject, isLoaded: isCurrentProjectLoaded } =
		useProjectQuery()

	const renderButtonContent = () => {
		const isLoading = !session
		const avatarFallback =
			session?.session?.profile?.firstName?.charAt(0) ||
			currentProject?.name?.charAt(0) ||
			""

		if (isLoading) {
			return (
				<>
					<Skeleton className="h-5 w-5 rounded-full bg-primary/30" />
					<Skeleton className="h-3 w-32 bg-primary/30" />
				</>
			)
		}

		if (!currentProject) {
			return (
				<>
					<Avatar className="h-5 w-5">
						<AvatarFallback></AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">No Project</span>
					<CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
				</>
			)
		}

		return (
			<>
				<Avatar className="h-5 w-5">
					<AvatarImage src={currentProject?.imageUrl} />
				</Avatar>
				<span className="text-xs text-muted-foreground">
					{currentProject?.name}
				</span>
			</>
		)
	}

	return (
		<>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger disabled asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Select project"
						className={twMerge("w-[200px] items-center gap-2", className)}
						disabled={!isCurrentProjectLoaded}
					>
						{renderButtonContent()}
						{/* {isSettingOrganization ? (
							<Loader2 className="ml-auto h-4 w-4 shrink-0 animate-spin opacity-30" />
						) : (
						)} */}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandList>
							<CommandInput placeholder="Search project..." />
							<CommandEmpty>No project found.</CommandEmpty>
							<CommandGroup heading="Projects">
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
								<CommandItem
									className="gap-2 py-2 text-xs cursor-pointer"
									onSelect={() => {
										setOpen(false)
										setOpenNewProject(true)
									}}
								>
									<PlusCircledIcon className="h-4 w-4" />
									Create Project
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<NewProjectDialog
				open={openNewProject}
				onOpenChange={setOpenNewProject}
			/>
		</>
	)
}
