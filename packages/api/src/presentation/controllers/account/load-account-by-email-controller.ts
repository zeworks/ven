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
import { HttpResponse } from "@/presentation/protocols/http"

export class LoadAccountByEmailController
	implements Controller<ControllerRequest, ControllerResponse>
{
	constructor(
		private readonly loadAccountByEmailService: LoadAccountByEmailUseCase
	) {}

	execute: ControllerProtocol<ControllerRequest, ControllerResponse, any> =
		async (request) => {
			if (!request?.email) return badRequest(new MissingParamError("email"))

			try {
				const account = await this.loadAccountByEmailService.loadByEmail(
					request?.email
				)

				if (!account) return notFound("account not found")

				return ok(true)
			} catch (error: any) {
				return serverError(error)
			}
		}
}

type ControllerRequest = {
	email: string
}

type ControllerResponse = boolean
