import { Controller } from "../../protocols/controller"
import { HttpResponse } from "../../protocols/http"

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

		return controller(request, requestContext)
	}
