import { CreateUserData, User } from "../../contracts/user"
import { Controller } from "../domain/protocols/controller"
import { badRequest, ok } from "../helpers/http"
import { createUserUsecase } from "../usecases/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"

//#region create user
export const createUserValidation = (input: CreateUserData) => {
	const result = CreateUserData.safeParse(input)
	if (!result.success) return validationErrorHandler(result)
}

export const createUserController =
	(
		createUsecase: ReturnType<typeof createUserUsecase>
	): Controller<CreateUserData, User> =>
	async (request) => {
		const error = createUserValidation(request!)
		if (error) return badRequest(error)

		const result = await createUsecase(request as CreateUserData)
		return ok(result)
	}
//#endregion

//#region update user
//#endregion
