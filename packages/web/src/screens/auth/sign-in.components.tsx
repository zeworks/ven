import { cn } from "@/lib/utils"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Icons } from "../../components/icons"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSignInForm, type SignInFormData } from "./sign-in.hooks"
import { useNavigate } from "react-router-dom"

export function SignInForm() {
	const navigate = useNavigate()
	const { signin, loading, error } = useSignInForm()
	const { register, handleSubmit } = useForm<SignInFormData>({
		mode: "onChange",
	})

	const onSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
		event?.preventDefault()
		await signin(data)
		navigate("/")
	}

	return (
		<div className={cn("grid gap-6")}>
			<form onSubmit={handleSubmit(onSignIn)}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Email
						</Label>
						<Input
							{...register("email")}
							id="email"
							placeholder="name@example.com"
							type="email"
							required
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={loading}
						/>
					</div>
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="password">
							Password
						</Label>
						<Input
							{...register("password")}
							id="password"
							type="password"
							placeholder="************"
							required
							autoCapitalize="none"
							autoComplete="password"
							autoCorrect="off"
						/>
					</div>
					<Button disabled={loading}>
						{loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
						Sign In
					</Button>
					{error && <p>{error}</p>}
				</div>
			</form>
		</div>
	)
}
