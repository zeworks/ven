import { Role } from "@/domain/entities/role"
import { LoadAccountByTokenUseCase } from "@/domain/usecases/users/load-account-by-token"
import { MissingParamError } from "../errors/missing-param-error"
import { badRequest, ok, serverError, unauthorized } from "../helpers/http"
import { HttpResponse } from "../protocols/http"
import { Middleware } from "../protocols/middleware"
import { Validation } from "../protocols/validation"

export class AuthMiddleware implements Middleware {
	constructor(
		private readonly loadAccountByToken: LoadAccountByTokenUseCase,
		private readonly validation: Validation
	) {}

	async handle(
		request: AuthMiddleware.Params
	): Promise<HttpResponse<AuthMiddleware.Result>> {
		const errors = this.validation.validate(request)

		if (errors) return badRequest(new MissingParamError("autorization header"))

		try {
			const account = await this.loadAccountByToken.loadToken(
				request.accessToken
			)

			// only allow to authenticate ACTIVE users
			if (account && account.status === "ACTIVE")
				return ok({
					accountId: account.id,
					accountRole: account.role,
				})

			return unauthorized()
		} catch (error: any) {
			return serverError(error)
		}
	}
}

export namespace AuthMiddleware {
	export type Params = {
		accessToken: string
	}

	export type Result = {
		accountId: string
		accountRole: Role
	} | null
}
