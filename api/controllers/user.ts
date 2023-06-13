import { CreateUserData } from "../../contracts/user"
import { badRequest, ok, serverError } from "../helpers/http"
import { CreateUserControllerRequest } from "../domain/controllers/user"

//#region create user
export const createUserController: CreateUserControllerRequest =
	(createUsecase, validation) => async (request) => {
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
