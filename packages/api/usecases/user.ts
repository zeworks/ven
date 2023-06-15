import { UpdateUserData } from "@ven/contracts/lib/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import {
	DuplicatedUsernameError,
	InvalidUserError,
} from "../domain/errors/user"
import {
	CreateUserUseCaseFn,
	GetUserByIdUseCaseFn,
	GetUserByUsernameUseCaseFn,
	UpdateUserUseCaseFn,
} from "../domain/usecases/user"
import { createUserValidation } from "../factories/user"

export const ERROR_DUPLICATED_USERNAME = new Error(
	"this username already exists"
)

export const createUserUsecase: CreateUserUseCaseFn =
	(repository, uuid, loadUsername) => async (request) => {
		const invalidPayloadError = createUserValidation(request)
		if (invalidPayloadError) return invalidPayloadError as any

		// TODO: validate if the username, email already exists on DB
		// if not, create, otherwise throw the error
		const usernameFound = await loadUsername(request.username)
		if (!!usernameFound) throw new DuplicatedUsernameError()

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
		if (!user) throw new InvalidUserError()

		// return the update response
		return repo.update(data, data.id)
	}

export const getUserByIdUsecase: GetUserByIdUseCaseFn = (repo) => (id) =>
	repo.get(id)

export const getUserByUsernameUsecase: GetUserByUsernameUseCaseFn =
	(repo) => (username) =>
		repo.getUsername(username)
