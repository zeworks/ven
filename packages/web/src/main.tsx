import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "./providers/theme-provider.tsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "@/config/routes"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="ven-dtheme">
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
