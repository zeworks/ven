import { SESSION_TOKEN_KEY } from "@/config/constants"
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
				// TODO: remove this logic from here
				localStorage.setItem(
					SESSION_TOKEN_KEY,
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhNmYzMzI4LTlhODktNDVlNi04MGQ3LWM0NjQ5NWEzM2JmMSIsImlhdCI6MTY5OTk4MTgwNiwiZXhwIjoxNzAwMDY4MjA2fQ.myj9VTZaBpWwZ0c-zUyon9DYf2tLDDmbtaQ8Ht_lB_k"
				)
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
