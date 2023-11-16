import { DeleteAccountController } from "@/presentation/controllers/account/delete-account-controller"
import { makeDeleteAccountUseCase } from "../../usecases/users/delete-account-usecase-factory"

export const makeDeleteAccountController = () => {
	return new DeleteAccountController(makeDeleteAccountUseCase())
}
