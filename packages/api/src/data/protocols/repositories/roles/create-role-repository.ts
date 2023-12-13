import {
	CreateRoleUseCaseInput,
	CreateRoleUseCaseOutput,
} from "@/domain/usecases/roles/create-role"
import { z } from "zod"

export interface CreateRoleRepository {
	create: (
		params: CreateRoleRepositoryInput
	) => Promise<CreateRoleRepositoryOutput>
}

export const CreateRoleRepositoryInput = CreateRoleUseCaseInput.merge(
	z.object({
		id: z.string(),
	})
)

export const CreateRoleRepositoryOutput = CreateRoleUseCaseOutput

export type CreateRoleRepositoryInput = z.infer<
	typeof CreateRoleRepositoryInput
>
export type CreateRoleRepositoryOutput = z.infer<
	typeof CreateRoleRepositoryOutput
>
