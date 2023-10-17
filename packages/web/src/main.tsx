import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "@/config/routes"
import { ThemeProvider } from "./providers/theme.tsx"
import { SessionProvider } from "./providers/session.tsx"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SessionProvider>
			<ThemeProvider defaultTheme="light" storageKey="ven-dtheme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</SessionProvider>
	</React.StrictMode>
)
