import { useRouteError } from "react-router-dom"

export default function ErrorBoundary() {
	const error = useRouteError()
	console.error(error)

	return (
		<div className="h-screen flex flex-col justify-center items-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg text-center">
				<h1 className="text-3xl font-bold text-red-500 mb-4">
					Oops! Something Went Wrong
				</h1>
				<p className="text-gray-700 mb-4">
					An error occurred while loading this page. Please try again later.
				</p>
				<button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg focus:outline-none">
					Reload Page
				</button>
			</div>
		</div>
	)
}
