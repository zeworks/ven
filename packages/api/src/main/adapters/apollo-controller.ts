import { Controller } from "@/presentation/protocols/controller"
import {
	ApolloError,
	AuthenticationError,
	UserInputError,
	ForbiddenError,
} from "apollo-server"

export async function apolloControllerAdapter<Args = any, Context = any>(
	controller: Controller,
	args?: Args,
	context?: Context
): Promise<any> {
	const request = {
		...(args || {}),
	}

	const requestContext = {
		...(context || {}),
		accountId: (context as any)?.reply.request?.accountId,
		accountRole: (context as any)?.reply.request?.accountRole,
	}

	const httpResponse = await controller.execute(request, requestContext)

	switch (httpResponse.statusCode) {
		case 200:
		case 204:
			return httpResponse.data
		case 400:
			throw new UserInputError(httpResponse.data.message)
		case 401:
			throw new AuthenticationError(httpResponse.data.message)
		case 403:
			throw new ForbiddenError(httpResponse.data.message)
		default:
			throw new ApolloError(httpResponse.data.message)
	}
}
