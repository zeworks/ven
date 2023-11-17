import { UpdateAccountController } from "@/presentation/controllers/account/update-account-controller"
import { makeUpdateAccountUseCase } from "../../usecases/users/update-account-usecase-factory"

export const makeUpdateAccountController = () =>
	new UpdateAccountController(makeUpdateAccountUseCase())
