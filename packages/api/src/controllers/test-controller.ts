import { ok } from "../helpers/http"
import { Controller } from "../protocols/controller"

export const testController: Controller = async (request, context) => {
	console.log(request)

	return ok(`Hello ${request.name}!`)
}
