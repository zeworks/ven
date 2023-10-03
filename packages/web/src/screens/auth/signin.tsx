import { Button } from "@/components/ui/button"

export default function SignIn() {
	const click = () => {
		throw new Error("teste de mensagem")
	}

	return (
		<div>
			sign in screen! <Button onClick={click}> click </Button>
		</div>
	)
}
