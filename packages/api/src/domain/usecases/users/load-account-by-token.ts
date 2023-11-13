import { User } from "@/domain/entities/user"

export interface LoadAccountByTokenUseCase {
	loadToken: LoadAccountByTokenUseCaseFunction
}

export type LoadAccountByTokenUseCaseFunction = (
	token: string
) => Promise<LoadAccountByTokenUseCase.Result>

export namespace LoadAccountByTokenUseCase {
	export type Result = User | null
}
