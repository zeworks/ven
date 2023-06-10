import { CreateUserData } from "../../contracts/user"
import { uuid } from "../adapters/uuid"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import { createUserController } from "../controllers/user"
import { Validation } from "../domain/protocols/validation"
import { userRepository } from "../repositories/user"
import { userMemoryRepository } from "../repositories/user.memory"
import { createUserUsecase } from "../usecases/user"

export const createUserUsecaseFactory = createUserUsecase(userRepository, uuid)
export const createUserUsecaseFactoryMemory = createUserUsecase(
	userMemoryRepository,
	uuid
)
export const createUserValidation: Validation = (input) => {
	const result = CreateUserData.safeParse(input)
	if (!result.success) return validationErrorHandler(result)
}
export const createUserControllerFactory = createUserController(
	createUserUsecaseFactory,
	createUserValidation
)
export const createUserControllerFactoryMemory = createUserController(
	createUserUsecaseFactoryMemory,
	createUserValidation
)
