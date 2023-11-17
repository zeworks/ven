import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "@/config/routes"
import { ThemeProvider } from "./providers/theme.tsx"
import { SessionProvider } from "./providers/session.tsx"
import { QueryClient, QueryClientProvider } from "react-query"

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<SessionProvider>
				<ThemeProvider defaultTheme="light" storageKey="ven-dtheme">
					<RouterProvider router={router} />
				</ThemeProvider>
			</SessionProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
