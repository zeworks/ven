import { CreateUserData } from "@ven/contracts/dist/user"
import { validationErrorHandler } from "../adapters/validationErrorHandler"
import { createUserController } from "../controllers/user"
import { Validation } from "../protocols/validation"
import { userRepository } from "../repositories/user"
import { userMemoryRepository } from "../repositories/user.memory"
import {
	createUserUsecase,
	getByEmailUsecase,
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

// get by email
export const getUserByEmailUsecaseFactory = getByEmailUsecase(userRepository)
export const getUserByEmailUsecaseFactoryMemory =
	getByEmailUsecase(userMemoryRepository)
//#endregion

//#region create user factories
export const createUserUsecaseFactory = createUserUsecase(
	userRepository,
	getUserByUsernameUsecaseFactory,
	getUserByEmailUsecaseFactory
)
export const createUserUsecaseFactoryMemory = createUserUsecase(
	userMemoryRepository,
	getUserByUsernameUsecaseFactoryMemory,
	getUserByEmailUsecaseFactoryMemory
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
