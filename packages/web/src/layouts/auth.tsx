import { useSessionProvider } from "@/providers/session"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function AuthLayout() {
	const { isAuthenticated } = useSessionProvider()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/")
		}
	}, [isAuthenticated])

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
			<Outlet context="auth-layout" />
		</div>
	)
}
