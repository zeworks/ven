import { z } from "zod"
import { Permission } from "../../entities/permission"
import { Role } from "../../entities/role"

export const CreateRoleUseCaseInput = z.object({
	key: z.string(),
	name: z.string(),
	status: z.boolean().default(true),
	permissions: z.array(Permission).optional().nullable(),
})

export const CreateRoleUseCaseOutput = Role.nullable()

export type CreateRoleUseCaseInput = z.infer<typeof CreateRoleUseCaseInput>
export type CreateRoleUseCaseOutput = z.infer<typeof CreateRoleUseCaseOutput>

export type CreateRoleUseCaseFunction = (
	input: CreateRoleUseCaseInput
) => Promise<CreateRoleUseCaseOutput>

export interface CreateRoleUseCase {
	create: CreateRoleUseCaseFunction
}
