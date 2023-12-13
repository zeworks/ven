import { DbCreateRole } from "@/data/usecases/roles/create-role-usecase"
import { CreateRoleUseCase } from "@/domain/usecases/roles/create-role"
import { RolesRepository } from "@/infra/db/prisma/repos/roles-repository"
import { makeDbCheckRoleByKeyUseCase } from "./check-role-by-key-usecase-factory"
import { UuidAdapter } from "@/infra/cryptography/uuid"

export const makeDbCreateRoleUseCase = (): CreateRoleUseCase => {
	const createRoleRepository = new RolesRepository()
	const uuidAdapter = new UuidAdapter()
	return new DbCreateRole(
		uuidAdapter,
		makeDbCheckRoleByKeyUseCase(),
		createRoleRepository
	)
}
