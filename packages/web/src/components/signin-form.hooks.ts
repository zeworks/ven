import { useSessionProvider } from "@/providers/session"
import { useGetAccountByEmailQuery } from "@/services/account"
import { useCreateAuthenticationMutation } from "@/services/authentication"
import { Account } from "@ven/graphql/dist/graphql"
import { useEffect, useState } from "react"

export type SignInFormData = {
	email: string
	password: string
}

export const useSignInForm = () => {
	const { setSession } = useSessionProvider()
	const accountByEmailQuery = useGetAccountByEmailQuery()
	const createAuthentication = useCreateAuthenticationMutation()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	// clear the error after some seconds
	useEffect(() => {
		if (error) {
			const timeout = setTimeout(() => setError(""), 3 * 1000)

			return () => clearTimeout(timeout)
		}
	}, [error])

	const signin = async (data: SignInFormData): Promise<any> => {
		try {
			const authenticationResult = await createAuthentication.mutateAsync(data)

			if (authenticationResult.createAuthentication?.accessToken) {
				setSession(authenticationResult.createAuthentication as Account)

				return authenticationResult
			}
		} catch (error) {
			// TODO: review the message
			setError("authentication failed!")
			throw error
		}
	}

	const isEmailValid = async (email: string) => {
		setError("")
		setLoading(true)
		try {
			const result = await accountByEmailQuery.mutateAsync({ email })
			if (result.accountByEmail) return true

			setError("the email is not valid")
			return false
		} catch (error) {
			setError("the email is not valid")
			return false
		} finally {
			setLoading(false)
		}
	}

	return {
		signin,
		isEmailValid,
		loading,
		error,
	}
}
