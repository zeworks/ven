import { CreateUserData, User } from "@ven/contracts/dist/user"
import { Controller } from "../protocols/controller"
import { Validation } from "../protocols/validation"
import {
	CreateUserUseCaseFn,
	GetAllUsecaseFn,
	GetEmailUsecaseFn,
	GetUserByIdUseCaseFn,
} from "../usecases/user"

export type CreateUserControllerRequest = (
	createUsecase: ReturnType<CreateUserUseCaseFn>,
	validation: Validation
) => Controller<CreateUserData, User>

export type GetAllUsersControllerRequest = (
	getAllUsecase: ReturnType<GetAllUsecaseFn>
) => Controller<void, Array<User>>

export type GetUserByIdControllerRequest = (
	getUserByIdUsecase: ReturnType<GetUserByIdUseCaseFn>
) => Controller<{ id: string }, User>

export type GetUserByEmailControllerRequest = (
	getByEmail: ReturnType<GetEmailUsecaseFn>
) => Controller<{ email: string }, User>
