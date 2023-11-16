import { LoadAccountByEmailUseCase } from "@/domain/usecases/users/load-account-by-email"
import { MissingParamError } from "@/presentation/errors/missing-param-error"
import {
	badRequest,
	notFound,
	ok,
	serverError,
} from "@/presentation/helpers/http"
import {
	Controller,
	ControllerProtocol,
} from "@/presentation/protocols/controller"

export class LoadAccountByEmailController implements Controller {
	constructor(
		private readonly loadAccountByEmailService: LoadAccountByEmailUseCase
	) {}

	execute: ControllerProtocol<
		{ email: string },
		LoadAccountByEmailUseCase.Result,
		any
	> = async (request) => {
		if (!request?.email) return badRequest(new MissingParamError("email"))

		try {
			const account = await this.loadAccountByEmailService.loadByEmail(
				request?.email
			)

			if (!account) return notFound("account not found")

			return ok(account)
		} catch (error: any) {
			return serverError(error)
		}
	}
}
