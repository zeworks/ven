import { User } from "@/domain/entities/user"

export type CreateAccountUseCaseFunction = (
	input: CreateAccountUseCase.Params
) => Promise<CreateAccountUseCase.Result>

export interface CreateAccountUseCase {
	create: CreateAccountUseCaseFunction
}

export namespace CreateAccountUseCase {
	export type Params = {
		username: string
		email: string
		status?: boolean
		password?: string
		role?: string
		profile: {
			firstName: string
			picture?: string
			lastName?: string
		}
	}

	export type Result = User | null
}
