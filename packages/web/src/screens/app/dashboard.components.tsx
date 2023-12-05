import { NewProjectDialog } from "@/components/new-project-dialog"
import { Card, CardContent } from "@/components/ui/card"
import { PlusIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export function CurrentProjects() {
	return (
		<div className="space-y-1">
			<h2 className="text-2xl font-medium">My Projects</h2>
		</div>
	)
}

export function DrawedProjects() {
	const [openNewProject, setOpenNewProject] = useState(false)

	return (
		<>
			<div className="space-y-1">
				<h2 className="text-2xl font-medium">Add a new project</h2>
				<span className="block text-muted-foreground">
					Create a blank project or start from a Starter or Schema template.
				</span>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				<Card
					onClick={() => setOpenNewProject(true)}
					className="aspect-square flex items-center justify-center relative hover:border-black hover:dark:border-white cursor-pointer group"
				>
					<CardContent className="flex flex-col items-center text-muted-foreground group-hover:text-black group-hover:dark:text-white">
						<div className="border rounded-xl h-14 w-14 flex items-center justify-center group-hover:border-black group-hover:dark:border-white">
							<PlusIcon className="h-7 w-7" />
						</div>
						<span className="mt-2">create project</span>
					</CardContent>
				</Card>
			</div>

			<NewProjectDialog
				open={openNewProject}
				onOpenChange={setOpenNewProject}
			/>
		</>
	)
}
