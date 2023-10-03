import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"

export function Header() {
	return (
		<div className="flex h-16 items-center justify-between border-b px-6">
			<div className="flex items-center gap-4">
				<Link to="/">logo here</Link>

				<Separator orientation="vertical" className="h-5" />
			</div>

			<div className="flex items-center gap-4"></div>
		</div>
	)
}
