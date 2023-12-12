import {
	UpdateAccountUseCaseInput,
	UpdateAccountUseCaseOutput,
} from "@/domain/usecases/users/update-account"

export interface UpdateAccountRepository {
	updateAccount: (
		id: string,
		input: UpdateAccountUseCaseInput
	) => Promise<UpdateAccountUseCaseOutput>
}
