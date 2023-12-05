import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogHeader,
	DialogFooter,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useEffect } from "react"

type NewProjectDialogProps = {
	/**
	 * @default false
	 */
	open?: boolean
	/**
	 * on change the open value
	 * @param open boolean
	 * @returns
	 */
	onOpenChange: (open: boolean) => void
}

type FormData = {
	projectName: string
}

export function NewProjectDialog({
	open = false,
	onOpenChange,
}: NewProjectDialogProps) {
	// Form
	const { register, handleSubmit, reset } = useForm<FormData>()

	useEffect(() => {
		if (!open) {
			reset()
		}
	}, [open, reset])

	const onSubmit = handleSubmit((data) => {
		console.log("Create Project Form!")
		console.log(data)

		reset()
	})

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Project</DialogTitle>
					<DialogDescription>
						Add a new project to manage the content.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={onSubmit}>
					<div>
						<div className="space-y-4 py-2 pb-4">
							<div className="space-y-2">
								<Label htmlFor="name">Project name</Label>
								<Input {...register("projectName")} placeholder="Acme Inc." />
							</div>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => onOpenChange(false)}>
							Cancel
						</Button>
						<Button type="submit">Create</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
