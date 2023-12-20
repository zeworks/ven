import { AccountContext } from "@/config/account-context"
import { Role } from "@/domain/entities/role"
import { UnauthorizedError } from "@/presentation/errors/unauthorized-error"
import { serverError } from "@/presentation/helpers/http"
import { Controller } from "@/presentation/protocols/controller"
import { HttpResponse } from "@/presentation/protocols/http"

export class AclDecorator implements Controller {
	constructor(
		private readonly controller: Controller,
		private readonly permissionKey: string
	) {}

	async execute(
		request?: any,
		context?: AccountContext
	): Promise<HttpResponse<any>> {
		const userRole = context?.accountRole as Role

		const userPermission = userRole?.permissions?.find(
			(p) => p.key === this.permissionKey
		)

		const isPermissionActive =
			(userPermission && userPermission.status) || false

		const isRoleActive = userRole?.status || false

		if (!isRoleActive || !isPermissionActive)
			return serverError(new UnauthorizedError())

		return this.controller.execute(request, context)
	}
}
