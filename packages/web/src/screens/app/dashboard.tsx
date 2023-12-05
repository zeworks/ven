import { Separator } from "@/components/ui/separator"
import { CurrentProjects, DrawedProjects } from "./dashboard.components"
import { useProjectsQuery } from "@/services/project"

export default function Dashboard() {
	const { projects } = useProjectsQuery()

	return (
		<div className="space-y-8">
			{!!projects.length && (
				<>
					<CurrentProjects />
					<Separator />
				</>
			)}
			<DrawedProjects />
		</div>
	)
}
