import { HttpResponse } from "../../protocols/http"

export const graphqlResponseAdapter = (response: HttpResponse) => {
	switch (response.statusCode) {
		case 200:
		case 204:
			return response.data
		case 400:
			throw new Error(response.data.message)
		case 401:
		// throw new AuthenticationError(httpResponse.data.message)
		case 403:
		// throw new ForbiddenError(httpResponse.data.message)
		default:
			throw new Error(response.data.message)
	}
}
