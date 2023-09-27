import { UpdateUserData } from "@ven/contracts/src/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import {
	DuplicatedEmailError,
	DuplicatedUsernameError,
	InvalidUserError,
} from "../domain/errors/user"
import {
	CreateUserUseCaseFn,
	GetEmailUsecaseFn,
	GetUserByIdUseCaseFn,
	GetUserByUsernameUseCaseFn,
	UpdateUserUseCaseFn,
} from "../domain/usecases/user"
import { createUserValidation } from "../factories/user"
import { uuid } from "../adapters/uuid"
import { hash } from "../adapters/hash"

export const ERROR_DUPLICATED_USERNAME = new Error(
	"this username already exists"
)

export const createUserUsecase: CreateUserUseCaseFn =
	(repository, loadUsername, getEmail) => async (request) => {
		const invalidPayloadError = createUserValidation(request)
		if (invalidPayloadError) return invalidPayloadError as any

		const usernameFound = await loadUsername(request.username)
		if (!!usernameFound) throw new DuplicatedUsernameError()

		const emailFound = await getEmail(request.email)
		if (!!emailFound) throw new DuplicatedEmailError()

		const password = !request.password
			? await hash(request.email, 8)
			: request.password

		return repository.create({
			...request,
			id: uuid.generate(),
			password,
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

export const getByEmailUsecase: GetEmailUsecaseFn = (repo) => (email) =>
	repo.getEmail(email)
