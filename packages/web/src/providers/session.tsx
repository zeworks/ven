import { SESSION_TOKEN_KEY } from "@/config/constants"
import { useAuthenticationQuery } from "@/services/authentication"
import { Account } from "@ven/graphql/dist/graphql"
import { createContext, useContext, useEffect, useState } from "react"

type Session = Account

export interface SessionContextObject {
	/**
	 * The current session.
	 * @default undefined
	 * @description The current session.
	 */
	session?: Session
	/**
	 *
	 * @param session
	 * @returns void
	 * @description Set the current session.
	 */
	setSession: (session: Session) => void

	/**
	 * @description Clear the current session.
	 */
	clearSession: () => void

	/**
	 * @description Check if the user is authenticated.
	 */
	isAuthenticated: boolean

	hasAuthenticationToken: boolean

	setStorageSessionToken: (token: string) => void
}

const initialState: SessionContextObject = {
	session: undefined,
	setSession: () => null,
	clearSession: () => null,
	setStorageSessionToken: () => null,
	isAuthenticated: false,
	hasAuthenticationToken: false,
}

export const SessionContext = createContext<SessionContextObject>(initialState)

export function SessionProvider({ children }: { children: React.ReactNode }) {
	const authenticationQuery = useAuthenticationQuery()

	const [session, setSession] = useState<Session | undefined>(
		initialState.session
	)

	const hasAuthenticationToken =
		!!localStorage.getItem(SESSION_TOKEN_KEY) || false

	const isAuthenticated = !!session?.id

	useEffect(() => {
		if (authenticationQuery.data?.me && hasAuthenticationToken)
			setSession(authenticationQuery.data.me as any)
	}, [authenticationQuery.data?.me, hasAuthenticationToken])

	const clearSession = () => {
		localStorage.removeItem(SESSION_TOKEN_KEY)
		setSession(undefined)
	}

	const setStorageSessionToken = (token: string) =>
		localStorage.setItem(SESSION_TOKEN_KEY, token)

	const updateStorageSession = (session: Session) => {
		localStorage.setItem(SESSION_TOKEN_KEY, session.accessToken!)
		setSession(session)
	}

	return (
		<SessionContext.Provider
			value={{
				session,
				setSession: updateStorageSession,
				clearSession,
				isAuthenticated,
				hasAuthenticationToken,
				setStorageSessionToken,
			}}
		>
			{children}
		</SessionContext.Provider>
	)
}

export const useSessionProvider = () => {
	const context = useContext(SessionContext)

	if (!context)
		throw new Error("useSession must be used within a SessionProvider")

	return context
}
