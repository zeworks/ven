import { Button } from "@/components/ui/button"
import { useSessionProvider } from "@/providers/session"

export default function SignIn() {
	const { setSession } = useSessionProvider()

	const click = () => {
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
	}

	return (
		<div>
			sign in screen! <Button onClick={click}> click </Button>
		</div>
	)
}
