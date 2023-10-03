import { Outlet } from "react-router-dom"

export default function AppLayout() {
	return (
		<div className="min-h-screen bg-background">
			{/* <Header /> */}
			<main className="mx-auto max-w-6xl p-6">
				<Outlet context="app-layout" />
			</main>
		</div>
	)
}
