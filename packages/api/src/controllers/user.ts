import { CreateUserData } from "@ven/contracts/dist/user"
import { badRequest, noContent, ok, serverError } from "../helpers/http"
import {
	CreateUserControllerRequest,
	GetAllUsersControllerRequest,
	GetUserByIdControllerRequest,
} from "../domain/controllers/user"

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

export const getUserByIdController: GetUserByIdControllerRequest =
	(getUserByIdUsecase) => async (request) => {
		try {
			const result = await getUserByIdUsecase(request?.id!)
			if (!result) return noContent()

			return ok(result)
		} catch (error) {
			return serverError(error)
		}
	}

export const getUsersController: GetAllUsersControllerRequest =
	(getUsersUsecase) => async () => {
		try {
			const result = await getUsersUsecase()
			if (!result) return noContent()

			return ok(result)
		} catch (error) {
			return serverError(error)
		}
	}
