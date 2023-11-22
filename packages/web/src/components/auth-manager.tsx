import { useSessionProvider } from "@/providers/session"
import { useAuthenticationQuery } from "@/services/authentication"
import { ReactNode, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const AuthManager = ({ children }: { children: ReactNode }) => {
	const { hasAuthenticationToken, clearSession } = useSessionProvider()
	const currentAuthentication = useAuthenticationQuery()
	const navigate = useNavigate()
	const location = useLocation()

	const isNotAuthenticated =
		currentAuthentication.isFetched && !currentAuthentication.data?.me

	useEffect(() => {
		if (isNotAuthenticated || !hasAuthenticationToken) {
			clearSession()
			navigate("/auth/sign-in")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isNotAuthenticated, hasAuthenticationToken])

	useEffect(() => {
		const isAuthScreen = /auth/.test(location.pathname)
		if (!isNotAuthenticated && hasAuthenticationToken && isAuthScreen)
			navigate("/")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isNotAuthenticated, hasAuthenticationToken, location.pathname])

	return <>{children}</>
}
