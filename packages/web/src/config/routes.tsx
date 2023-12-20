import { RouteObject } from "react-router-dom"
import { Route } from "./types"
import Dashboard from "@/screens/app/dashboard"
import SignIn from "@/screens/auth/sign-in"
import AuthLayout from "@/layouts/auth"
import AppLayout from "@/layouts/app"
import ErrorNotFound from "@/screens/error-404"
import ErrorBoundary from "@/screens/error-boundary"
import Settings from "@/screens/app/settings"
import SettingsAccount from "@/screens/app/settings-account"
import SettingsMembers from "@/screens/app/settings-members"

export const routes: RouteObject[] = [
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
		element: <AppLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/settings",
				element: <Settings />,
				children: [
					{
						path: Route.SettingsAccount,
						element: <SettingsAccount />,
					},
					{
						path: Route.SettingsMembers,
						element: <SettingsMembers />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <ErrorNotFound />,
	},
]
