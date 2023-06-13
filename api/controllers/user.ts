import { CreateUserData, User } from "../../contracts/user"
import { Controller } from "../domain/protocols/controller"
import { badRequest, noContent, ok, serverError } from "../helpers/http"
import { createUserUsecase } from "../usecases/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import { Validation } from "../domain/protocols/validation"

//#region create user
export const createUserController =
	(
		createUsecase: ReturnType<typeof createUserUsecase>,
		validation: Validation
	): Controller<CreateUserData, User> =>
	async (request) => {
		const error = validation(request!)
		if (error) return badRequest(error)

		try {
			const result = await createUsecase(request as CreateUserData)
			return ok(result)
		} catch (error) {
			return serverError(error)
		}
	}
//#endregion

//#region update user
//#endregion
