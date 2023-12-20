import { Separator } from "@/components/ui/separator"
import { MembersList } from "./settings-members.components"

export default function SettingsMembers() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Members</h3>
				<p className="text-sm text-muted-foreground">
					Update your members settings. Manage who has access to your project.
				</p>
			</div>
			<Separator />
			<MembersList />
		</div>
	)
}
