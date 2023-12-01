import { useRouteError } from "react-router-dom"

export default function ErrorBoundary() {
	const error = useRouteError()
	console.error(error)

	return (
		<div className="h-screen flex justify-center items-center bg-background">
			<div className="border p-8 rounded-lg shadow-lg text-center">
				<h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
				<p className="text-gray-600 mb-4">
					An error occurred while loading this page. Please try again later.
				</p>
				<button
					onClick={() => window.location.reload()}
					className="px-4 py-2 border hover:border-white text-white rounded-lg focus:outline-none"
				>
					Reload Page
				</button>
			</div>
		</div>
	)
}
