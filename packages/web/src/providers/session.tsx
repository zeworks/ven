import { User } from "@ven/contracts/dist/user"
import { createContext, useContext, useState } from "react"

type Session = User & {
	accessToken: string
}

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
	isAuthenticated: () => boolean
}

const initialState: SessionContextObject = {
	session: undefined,
	setSession: () => null,
	clearSession: () => null,
	isAuthenticated: () => false,
}

export const SessionContext = createContext<SessionContextObject>(initialState)

export function SessionProvider({ children }: { children: React.ReactNode }) {
	const [session, setSession] = useState<Session | undefined>(
		initialState.session
	)

	const isAuthenticated = () => !!session

	const clearSession = () => {
		setSession(undefined)
	}

	return (
		<SessionContext.Provider
			value={{
				session,
				setSession,
				clearSession,
				isAuthenticated,
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
