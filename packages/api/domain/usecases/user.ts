import { UserRepository } from "../repositories/user"
import {
	CreateUserData,
	UpdateUserData,
	User,
} from "../../../contracts/src/user"

export type CreateUserUseCase = {
	create: CreateUserUseCaseFn
}

export type CreateUserUseCaseFn = (
	repository: UserRepository,
	getByUsername: ReturnType<GetUserByUsernameUseCaseFn>,
	getByEmail: ReturnType<GetEmailUsecaseFn>
) => (data: CreateUserData) => Promise<User>

export type GetUserByIdUseCase = {
	get: GetUserByIdUseCaseFn
}

export type GetUserByIdUseCaseFn = (
	repo: UserRepository
) => (id: string) => Promise<User | null>

export type GetUserByUsernameUseCaseFn = (
	repo: UserRepository
) => (username: string) => Promise<User | null>

export type GetEmailUsecase = {
	getEmail: GetEmailUsecaseFn
}

export type GetEmailUsecaseFn = (
	repo: UserRepository
) => (email: string) => Promise<User | null>

export type UpdateUserUseCase = {
	update: UpdateUserUseCaseFn
}

export type UpdateUserUseCaseFn = (
	repo: UserRepository,
	get: GetUserByIdUseCaseFn
) => (user: UpdateUserData) => Promise<User>
