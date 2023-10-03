import { RouteObject } from "react-router-dom"
import Dashboard from "@/screens/app/dashboard"
import SignIn from "@/screens/auth/signin"
import SignUp from "@/screens/auth/signup"
import AuthLayout from "@/layouts/auth"
import AppLayout from "@/layouts/app"
import ErrorNotFound from "@/screens/error-404"

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
			{
				path: "sign-up",
				element: <SignUp />,
			},
		],
	},
	{
		path: "/",
		isPrivate: true,
		element: <AppLayout />,
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
