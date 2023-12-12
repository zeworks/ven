import {
	CreateAccountUseCaseInput,
	CreateAccountUseCaseOutput,
} from "@/domain/usecases/users/create-account"
import * as z from "zod"

export const CreateAccountRepositoryInput = CreateAccountUseCaseInput.merge(
	z.object({
		id: z.string(),
	})
)

export const CreateAccountRepositoryOutput = CreateAccountUseCaseOutput

export interface CreateAccountRepository {
	create: (
		input: CreateAccountRepositoryInput
	) => Promise<CreateAccountRepositoryOutput>
}

export type CreateAccountRepositoryInput = z.infer<
	typeof CreateAccountRepositoryInput
>
export type CreateAccountRepositoryOutput = z.infer<
	typeof CreateAccountRepositoryOutput
>
