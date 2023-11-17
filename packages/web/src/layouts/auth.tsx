import { AuthManager } from "@/components/auth-manager"
import { Outlet } from "react-router-dom"

export default function AuthLayout() {
	return (
		<AuthManager>
			<div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
				<Outlet context="auth-layout" />
			</div>
		</AuthManager>
	)
}
