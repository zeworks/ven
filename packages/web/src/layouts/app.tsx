import { AuthManager } from "@/components/auth-manager"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
	return (
		<AuthManager>
			<div className="min-h-screen bg-background">
				<Header />
				<main className="mx-auto max-w-6xl p-6">
					<Outlet context="app-layout" />
				</main>
				<Toaster />
			</div>
		</AuthManager>
	)
}
