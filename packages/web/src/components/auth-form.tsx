import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Icons } from "./icons"
import { useState } from "react"
import { useSessionProvider } from "@/providers/session"

export function AuthForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { setSession } = useSessionProvider()

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault()
		setIsLoading(true)

		setTimeout(() => {
			setSession({
				id: "1",
				profile: {
					first_name: "Dake",
					last_name: "Kang",
					picture: "https://avatars.githubusercontent.com/u/25190563?v=4",
				},
				createdAt: new Date(),
				email: "dake@mail.com",
				username: "dakekang",
				accessToken: "12312312312",
			})
			setIsLoading(false)
		}, 3000)
	}

	return (
		<div className={cn("grid gap-6")}>
			<form onSubmit={onSubmit}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Email
						</Label>
						<Input
							id="email"
							placeholder="name@example.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
						/>
					</div>
					<Button disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
						)}
						Sign In with Email
					</Button>
				</div>
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="bg-background px-2 text-muted-foreground">or</span>
				</div>
			</div>
			<Button variant="outline" type="button" disabled={isLoading}>
				{isLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{" "}
				Github
			</Button>
		</div>
	)
}
