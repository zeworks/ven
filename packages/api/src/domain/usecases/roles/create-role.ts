import { PermissionsEntity } from "../../entities/permission"
import { RolesEntity } from "../../entities/role"

export type CreateRoleUseCaseFunction = (
	input: CreateRoleUseCase.Params
) => Promise<CreateRoleUseCase.Result>

export interface CreateRoleUseCase {
	create: CreateRoleUseCaseFunction
}

export namespace CreateRoleUseCase {
	export type Params = {
		id: string
		key: string
		name: string
		status?: boolean
		permissions?: PermissionsEntity[] | null
	}

	export type Result = RolesEntity | null
}
