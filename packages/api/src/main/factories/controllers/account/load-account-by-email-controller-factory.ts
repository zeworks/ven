import { LoadAccountByEmailController } from "@/presentation/controllers/account/load-account-by-email-controller"
import { makeLoadAccountByEmail } from "../../usecases/users/load-account-by-email-usecase-factory"

export const makeLoadAccountByEmailController = () =>
	new LoadAccountByEmailController(makeLoadAccountByEmail())
