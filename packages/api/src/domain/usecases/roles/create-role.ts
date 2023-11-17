import { Permission } from "../../entities/permission"
import { Role } from "../../entities/role"

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
		permissions?: Permission[] | null
	}

	export type Result = Role | null
}
