import { User } from "@/domain/entities/user"

export type LoadAccountByEmailUseCaseFunction = (
	email: string
) => Promise<LoadAccountByEmailUseCase.Result>

export interface LoadAccountByEmailUseCase {
	loadByEmail: LoadAccountByEmailUseCaseFunction
}

export namespace LoadAccountByEmailUseCase {
	export type Result = User | null
}
