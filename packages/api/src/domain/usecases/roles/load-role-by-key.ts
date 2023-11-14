import { Role } from "@/domain/entities/role"

export type LoadRoleByKeyUseCaseFunction = (
	key?: string
) => Promise<LoadRoleByKeyUseCase.Result>

export interface LoadRoleByKeyUseCase {
	loadByKey: LoadRoleByKeyUseCaseFunction
}

export namespace LoadRoleByKeyUseCase {
	export type Result = Role | null
}
