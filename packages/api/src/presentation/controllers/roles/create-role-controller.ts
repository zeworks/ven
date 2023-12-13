import {
	CreateRoleUseCase,
	CreateRoleUseCaseInput,
	CreateRoleUseCaseOutput,
} from "@/domain/usecases/roles/create-role"
import { badRequest, ok, serverError } from "@/presentation/helpers/http"
import { Controller } from "@/presentation/protocols/controller"
import { HttpResponse } from "@/presentation/protocols/http"
import { Validation } from "@/presentation/protocols/validation"

export class CreateRoleController implements Controller {
	constructor(
		private readonly validation: Validation,
		private readonly createRole: CreateRoleUseCase
	) {}

	execute = async (
		request: CreateRoleUseCaseInput
	): Promise<HttpResponse<CreateRoleUseCaseOutput>> => {
		try {
			const validationError = this.validation.validate(request)

			if (validationError) return badRequest(validationError)

			const result = await this.createRole.create(request)
			return ok(result)
		} catch (error: any) {
			return serverError(error)
		}
	}
}
