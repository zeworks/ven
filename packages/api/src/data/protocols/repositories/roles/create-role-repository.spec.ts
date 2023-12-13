import { test, expect } from "vitest"
import { DbCreateRole } from "@/data/usecases/roles/create-role-usecase"
import { InMemoryRolesRepository } from "./roles-repository-memory"
import { faker } from "@faker-js/faker"
import { UuidAdapter } from "@/infra/cryptography/uuid"

const roleRepository = new InMemoryRolesRepository()
const uuidAdapter = new UuidAdapter()

const makeCreateRoleRepository = () => {
	const createRole = new DbCreateRole(
		uuidAdapter,
		roleRepository,
		roleRepository
	)

	return {
		createRole,
	}
}

test("Should create role with success", async () => {
	const { createRole } = makeCreateRoleRepository()
	const role = {
		key: faker.random.word(),
		name: faker.random.word(),
		status: faker.datatype.boolean(),
	}
	await createRole.create(role)
	const repoData = roleRepository.roles[roleRepository.roles.length - 1]
	expect(repoData?.name).toBe(role?.name)
})

test("Should not role with duplicated key", async () => {
	const { createRole } = makeCreateRoleRepository()
	const role = {
		key: "key_name",
		name: faker.random.word(),
		status: faker.datatype.boolean(),
	}
	await createRole.create(role)
	const promise = createRole.create(role)
	expect(promise).rejects.toThrow("key key_name in use")
})
