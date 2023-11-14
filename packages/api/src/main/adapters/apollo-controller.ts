import { Controller } from "@/presentation/protocols/controller"
import {
	ApolloError,
	AuthenticationError,
	UserInputError,
	ForbiddenError,
} from "apollo-server"
import { MercuriusContext } from "mercurius"
import { makeAuthMiddleware } from "../factories/middlewares/auth-middleware-factory"
import { HttpResponse } from "@/presentation/protocols/http"

const validateHttpResponse = (http: HttpResponse) => {
	switch (http.statusCode) {
		case 200:
		case 204:
			return http.data
		case 400:
			throw new UserInputError(http.data.message)
		case 401:
			throw new AuthenticationError(http.data.message)
		case 403:
			throw new ForbiddenError(http.data.message)
		default:
			throw new ApolloError(http.data.message)
	}
}

export async function apolloControllerAdapter<RequestInput = any>(
	controller: Controller,
	request?: RequestInput,
	context?: MercuriusContext,
	useAuthentication: boolean = false
): Promise<any> {
	const _request = {
		...(request || {}),
	}

	let _context: any = context

	if (useAuthentication) {
		const token = context?.reply?.request?.headers?.["authorization"]

		const middlewareResponse = await makeAuthMiddleware().handle({
			accessToken: token,
		})

		if (!middlewareResponse.data?.accountId) {
			return validateHttpResponse(middlewareResponse)
		}

		_context = {
			accountRole: middlewareResponse.data?.accountRole,
			accountId: middlewareResponse.data?.accountId,
		}
	}

	const httpResponse = await controller.execute(_request, _context)

	return validateHttpResponse(httpResponse)
}
