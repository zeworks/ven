import { User } from "@/domain/entities/user"

export interface LoadAccountByIdUseCase {
	loadById: LoadAccountByIdUseCaseFunction
}

export type LoadAccountByIdUseCaseFunction = (
	id: string
) => Promise<LoadAccountByIdUseCase.Result>
export namespace LoadAccountByIdUseCase {
	export type Result = User | null
}
