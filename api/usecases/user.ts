import { UpdateUserData } from "../../contracts/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import {
	CreateUserUseCaseFn,
	GetUserByIdUseCaseFn,
	UpdateUserUseCaseFn,
} from "../domain/usecases/user"
import { createUserValidation } from "../factories/user"

export const createUserUsecase: CreateUserUseCaseFn =
	(repository, uuid) => async (request) => {
		const invalidPayloadError = createUserValidation(request)
		if (invalidPayloadError) return invalidPayloadError as any

		return repository.create({
			...request,
			id: uuid.generate(),
			status: request.status || "INACTIVE",
		})
	}

export const updateUserUsecase: UpdateUserUseCaseFn =
	(repo, loadUser) => async (data) => {
		// validate user data
		const result = UpdateUserData.safeParse(data)
		if (!result.success) return validationErrorHandler(result) as any

		// load user, if not found, returns null
		const user = await loadUser(repo)(data.id)
		// TODO: should throw an error
		if (!user) return null

		// return the update response
		return repo.update(data, data.id)
	}

export const getUserByIdUsecase: GetUserByIdUseCaseFn = (repo) => (id) =>
	repo.get(id)
