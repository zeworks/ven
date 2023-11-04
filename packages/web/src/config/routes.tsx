import { RouteObject } from "react-router-dom"
import Dashboard from "@/screens/app/dashboard"
import SignIn from "@/screens/auth/sign-in"
import AuthLayout from "@/layouts/auth"
import AppLayout from "@/layouts/app"
import ErrorNotFound from "@/screens/error-404"
import ErrorBoundary from "@/screens/error-boundary"

type Route = RouteObject & {
	isPrivate?: boolean
}

export const routes: Route[] = [
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "sign-in",
				element: <SignIn />,
			},
		],
	},
	{
		path: "/",
		isPrivate: true,
		element: <AppLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "*",
		element: <ErrorNotFound />,
	},
]
