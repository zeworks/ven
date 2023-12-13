import { KeyInUseError } from "@/data/errors/key-in-use-error"
import { CheckRoleByKeyRepository } from "@/data/protocols/repositories/roles/check-role-by-key-respository"
import { CreateRoleRepository } from "@/data/protocols/repositories/roles/create-role-repository"
import {
	CreateRoleUseCase,
	CreateRoleUseCaseFunction,
	CreateRoleUseCaseInput,
} from "@/domain/usecases/roles/create-role"
import { UuidAdapter } from "@/infra/cryptography/uuid"

export class DbCreateRole implements CreateRoleUseCase {
	constructor(
		private readonly uuid: UuidAdapter,
		private readonly checkRoleByKeyRepository: CheckRoleByKeyRepository,
		private readonly createRoleRepository: CreateRoleRepository
	) {}

	create: CreateRoleUseCaseFunction = async (input) => {
		const data = CreateRoleUseCaseInput.parse(input)

		try {
			const keyExists = await this.checkRoleByKeyRepository.checkByKey(data.key)

			if (keyExists) throw new KeyInUseError(data.key)

			const id = await this.uuid.generate()

			const role = await this.createRoleRepository.create({
				...input,
				id,
			})
			return role
		} catch (error: any) {
			throw error
		}
	}
}
