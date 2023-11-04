import { useSessionProvider } from "@/providers/session"
import { useState } from "react"

export type SignInFormData = {
	email: string
	password: string
}

export const useSignInForm = () => {
	const [loading, setLoading] = useState(false)
	const { setSession } = useSessionProvider()

	const signin = async (data: SignInFormData): Promise<any> => {
		console.log("sign in data: ", data)
		setLoading(true)
		return new Promise((resolve) => {
			setTimeout(() => {
				setSession({
					accessToken: "123",
					createdAt: new Date(),
					email: data.email,
					password: data.password || "",
					id: "12312412",
					profile: {
						picture: "https://picsum.photos/536/354",
						first_name: "Jose",
						last_name: "Nogueira",
					},
					username: "josnog",
				})
				setLoading(false)
				resolve(data)
			}, 1000)
		})
	}

	const validateEmail = async (email: string): Promise<boolean> => {
		console.info("validation email...")
		setLoading(true)
		return new Promise((resolve) => {
			setTimeout(() => {
				console.info("validated email: ", email)
				setLoading(false)
				resolve(true)
			}, 1000)
		})
	}

	return {
		signin,
		validateEmail,
		loading,
	}
}
