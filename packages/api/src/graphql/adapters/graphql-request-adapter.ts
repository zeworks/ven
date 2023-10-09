import { Controller } from "../../protocols/controller"

export const graphqlRequestAdapter = async <T = any, C = any>(
	controller: Controller,
	input: T,
	context: C
) => {
	const request = {
		...(input || {}),
	}

	const requestContext = {
		...(context || {}),
		accountId: (context as any)?.request?.accountId,
	}

	const response = await controller(request, requestContext)

	// log response
	console.info({
		request,
		response,
	})

	switch (response.statusCode) {
		case 200:
		case 204:
			return response.data
		case 400:
		// throw new UserInputError(httpResponse.data.message)
		case 401:
		// throw new AuthenticationError(httpResponse.data.message)
		case 403:
		// throw new ForbiddenError(httpResponse.data.message)
		default:
			throw new Error(response.data.message)
	}
}
