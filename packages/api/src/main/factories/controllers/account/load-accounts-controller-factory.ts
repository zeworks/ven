import { LoadAccountsController } from "@/presentation/controllers/account/load-accounts-controller"
import { makeDbLoadAccounts } from "../../usecases/users/load-accounts-usecase-factory"

export const makeLoadAccountsController = () => {
	return new LoadAccountsController(makeDbLoadAccounts())
}
