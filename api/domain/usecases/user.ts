import { UserRepository } from "../repositories/user"
import { UUID } from "../protocols/uuid"
import { CreateUserData, UpdateUserData, User } from "../../../contracts/user"

export type CreateUserUseCase = {
	create: CreateUserUseCaseFn
}

export type CreateUserUseCaseFn = (
	repository: UserRepository,
	uuid: UUID
) => (data: CreateUserData) => Promise<User>

export type GetUserByIdUseCase = {
	get: GetUserByIdUseCaseFn
}

export type GetUserByIdUseCaseFn = (
	repo: UserRepository
) => (id: string) => Promise<User | null>

export type UpdateUserUseCase = {
	update: UpdateUserUseCaseFn
}

export type UpdateUserUseCaseFn = (
	repo: UserRepository,
	get: GetUserByIdUseCaseFn
) => (user: UpdateUserData) => Promise<User>
