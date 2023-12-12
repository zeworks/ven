import { User } from "@/domain/entities/user"
import { z } from "zod"

export type CreateAuthenticationUseCaseFunction = (
	input: CreateAuthenticationUseCase.Params
) => Promise<CreateAuthenticationUseCase.Result>

export interface CreateAuthenticationUseCase {
	authenticate: CreateAuthenticationUseCaseFunction
}

export const CreateAuthenticationUseCaseInput = z.object({
	email: z.string().email("email invalid"),
	password: z.string(),
})

export const CreateAuthenticationUseCaseOutput = User.nullable()

export type CreateAuthenticationUseCaseInput = z.infer<
	typeof CreateAuthenticationUseCaseInput
>
export type CreateAuthenticationUseCaseOutput = z.infer<
	typeof CreateAuthenticationUseCaseOutput
>

export namespace CreateAuthenticationUseCase {
	export type Params = CreateAuthenticationUseCaseInput
	export type Result = CreateAuthenticationUseCaseOutput
}
