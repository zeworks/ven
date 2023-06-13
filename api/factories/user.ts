import { CreateUserData } from "../../contracts/src/user"
import { uuid } from "../adapters/uuid"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import { createUserController } from "../controllers/user"
import { Validation } from "../domain/protocols/validation"
import { userRepository } from "../repositories/user"
import { userMemoryRepository } from "../repositories/user.memory"
import {
	createUserUsecase,
	getUserByIdUsecase,
	getUserByUsernameUsecase,
} from "../usecases/user"

//#region get user factories
// get by id
export const getUserByIdUsecaseFactory = getUserByIdUsecase(userRepository)
export const getUserByIdUsecaseFactoryMemory =
	getUserByIdUsecase(userMemoryRepository)

// get by username
export const getUserByUsernameUsecaseFactory =
	getUserByUsernameUsecase(userRepository)
export const getUserByUsernameUsecaseFactoryMemory =
	getUserByUsernameUsecase(userMemoryRepository)
//#endregion

//#region create user factories
export const createUserUsecaseFactory = createUserUsecase(
	userRepository,
	uuid,
	getUserByUsernameUsecaseFactory
)
export const createUserUsecaseFactoryMemory = createUserUsecase(
	userMemoryRepository,
	uuid,
	getUserByUsernameUsecaseFactoryMemory
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
//#endregion
