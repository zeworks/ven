import { Controller } from "../../domain/protocols/controller"
import { HttpResponse } from "../../domain/protocols/http"

export const graphqlControllerAdapter =
	<T = any, C = any>(controller: Controller) =>
	async (input: T, context: C): Promise<HttpResponse> => {
		const request = {
			...(input || {}),
		}

		const requestContext = {
			...(context || {}),
			accountId: (context as any)?.request?.accountId,
		}

		console.info(JSON.stringify({ request }))

		return controller(request, requestContext)
	}
