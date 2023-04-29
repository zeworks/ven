import { UserRepository } from "../repositories/user"
import { UUID } from "../protocols/uuid"
import { CreateUserData, User } from "../../../contracts/user"

export type CreateUserUseCase = {
	create: CreateUserUseCaseFn
}

export type CreateUserUseCaseFn = (
	repository: UserRepository,
	uuid: UUID
) => (data: CreateUserData) => Promise<User>
