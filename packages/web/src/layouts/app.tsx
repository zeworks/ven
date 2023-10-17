import { Header } from "@/components/header"
import { useSessionProvider } from "@/providers/session"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function AppLayout() {
	const { isAuthenticated } = useSessionProvider()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/auth/sign-in")
		}
	}, [isAuthenticated])

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="mx-auto max-w-6xl p-6">
				<Outlet context="app-layout" />
			</main>
		</div>
	)
}
