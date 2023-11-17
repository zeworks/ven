import { User } from "@/domain/entities/user"

export type CreateAuthenticationUseCaseFunction = (
	input: CreateAuthenticationUseCase.Params
) => Promise<CreateAuthenticationUseCase.Result>

export interface CreateAuthenticationUseCase {
	authenticate: CreateAuthenticationUseCaseFunction
}

export namespace CreateAuthenticationUseCase {
	export type Params = {
		email: string
		password: string
	}

	export type Result = User | null
}
