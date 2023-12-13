import { test, expect } from "vitest"
import { DbCheckRoleByKey } from "@/data/usecases/roles/check-role-by-key-usecase"
import { DbCreateRole } from "@/data/usecases/roles/create-role-usecase"
import { faker } from "@faker-js/faker"
import { InMemoryRolesRepository } from "./roles-repository-memory"
import { UuidAdapter } from "@/infra/cryptography/uuid"

const rolesRepository = new InMemoryRolesRepository()
const uuidAdapter = new UuidAdapter()

const makeCheckRoleByKeyRepository = () => {
	const checkRoleByKeyRepository = new DbCheckRoleByKey(rolesRepository)

	return {
		checkRoleByKeyRepository,
	}
}

test("Should return false if key does not exists", async () => {
	const { checkRoleByKeyRepository } = makeCheckRoleByKeyRepository()
	const createRoleRepository = new DbCreateRole(
		uuidAdapter,
		rolesRepository,
		rolesRepository
	)
	const role = await createRoleRepository.create({
		key: faker.word.adjective(5),
		name: faker.name.firstName(),
		status: faker.datatype.boolean(),
	})

	if (role) {
		const keyExists = await checkRoleByKeyRepository.checkByKey("asdasd")
		expect(keyExists).toBeFalsy()
	}
})

test("Should return true if key already exists", async () => {
	const { checkRoleByKeyRepository } = makeCheckRoleByKeyRepository()
	const createRoleRepository = new DbCreateRole(
		uuidAdapter,
		rolesRepository,
		rolesRepository
	)
	const role = await createRoleRepository.create({
		key: faker.word.adjective(6),
		name: faker.name.firstName(),
		status: faker.datatype.boolean(),
	})

	if (role) {
		const result = await checkRoleByKeyRepository.checkByKey(role.key)
		expect(result).toBeTruthy()
	}
})
