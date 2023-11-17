import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Icons } from "./icons"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { useSignInForm, type SignInFormData } from "./signin-form.hooks"
import { useNavigate } from "react-router-dom"

export function SignInForm() {
	const { signin, isEmailValid, loading, error } = useSignInForm()
	const { register, handleSubmit } = useForm<SignInFormData>({
		mode: "onChange",
	})

	const navigate = useNavigate()

	const [showPassword, setShowPassword] = useState(false)

	const onSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
		event?.preventDefault()
		await signin(data)
		navigate("/")
	}

	const onValidateEmail: SubmitHandler<{ email: string }> = async (
		data,
		event
	) => {
		event?.preventDefault()
		const isValid = await isEmailValid(data.email)

		if (isValid) setShowPassword(true)
	}

	return (
		<div className={cn("grid gap-6")}>
			<form
				onSubmit={
					showPassword ? handleSubmit(onSignIn) : handleSubmit(onValidateEmail)
				}
			>
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
					{showPassword && (
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
					)}
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
