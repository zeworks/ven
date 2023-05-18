import { uuid } from "../adapters/uuid"
import { createUserController } from "../controllers/user"
import { userRepository } from "../repositories/user"
import { userMemoryRepository } from "../repositories/user.memory"
import { createUserUsecase } from "../usecases/user"

export const createUserUsecaseFactory = createUserUsecase(userRepository, uuid)
export const createUserUsecaseFactoryMemory = createUserUsecase(
	userMemoryRepository,
	uuid
)
export const createUserControllerFactory = createUserController(
	createUserUsecaseFactory
)
export const createUserControllerFactoryMemory = createUserController(
	createUserUsecaseFactoryMemory
)
