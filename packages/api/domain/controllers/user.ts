import { CreateUserData, User } from "../../../contracts/src/user"
import { Controller } from "../protocols/controller"
import { Validation } from "../protocols/validation"
import { CreateUserUseCaseFn } from "../usecases/user"

export type CreateUserControllerRequest = (
	createUsecase: ReturnType<CreateUserUseCaseFn>,
	validation: Validation
) => Controller<CreateUserData, User>
