import { HttpResponse } from "../../protocols/http"

export const graphqlResponseAdapter = (
	response: HttpResponse
): HttpResponse => {
	switch (response.statusCode) {
		case 200:
		case 204:
			console.info(JSON.stringify({ response }))
			return response.data
		case 400:
			console.info(JSON.stringify({ response }))
			throw new Error(response.data.message)
		case 401:
		// throw new AuthenticationError(httpResponse.data.message)
		case 403:
		// throw new ForbiddenError(httpResponse.data.message)
		default:
			console.info(JSON.stringify({ response }))
			throw new Error(response.data.message)
	}
}
