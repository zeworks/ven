import { ok } from "../helpers/http"
import { Controller } from "../protocols/controller"

export const testController: Controller = async (request, context) => {
	return ok(`Hello ${request.name}!`)
}
