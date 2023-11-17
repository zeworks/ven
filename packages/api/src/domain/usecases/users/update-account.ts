import { User, Profile } from "@/domain/entities/user"

export interface UpdateAccountUseCase {
	update: UpdateAccountUseCaseFn
}

export namespace UpdateAccountUseCase {
	export type Input = {
		username?: string | null
		password?: string | null
		role?: string | null
		profile?: Partial<Profile>
	}
	export type Result = User | null
}

export type UpdateAccountUseCaseFn = (
	id: string,
	input: UpdateAccountUseCase.Input
) => Promise<UpdateAccountUseCase.Result>
