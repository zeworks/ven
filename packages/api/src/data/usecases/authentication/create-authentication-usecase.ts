import { Encrypter } from "@/data/protocols/cryptography/encrypter"
import { HashComparer } from "@/data/protocols/cryptography/hash-comparer"
import { LoadAccountByEmailRepository } from "@/data/protocols/repositories/users/load-account-by-email-repository"
import { UpdateTokenRepository } from "@/data/protocols/repositories/users/update-token-repository"
import {
	CreateAuthenticationUseCase,
	CreateAuthenticationUseCaseFunction,
	CreateAuthenticationUseCaseInput,
} from "@/domain/usecases/authentication/create-authentication"

export class DbCreateAuthentication implements CreateAuthenticationUseCase {
	constructor(
		private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
		private readonly hashComparer: HashComparer,
		private readonly encrypter: Encrypter,
		private readonly updateAccessToken: UpdateTokenRepository
	) {}

	authenticate: CreateAuthenticationUseCaseFunction = async (data) => {
		const input = CreateAuthenticationUseCaseInput.parse(data)

		const account = await this.loadAccountByEmailRepository.loadByEmail(
			input.email
		)

		if (!account || account.status !== "ACTIVE") return null

		if (account && account.password) {
			const isValid = await this.hashComparer.compare(
				input.password,
				account.password
			)

			if (!isValid) return null

			const accessToken = await this.encrypter.encrypt(account.id)

			// update the token in repository
			await this.updateAccessToken.updateToken(account.id, accessToken)

			return {
				...account,
				accessToken,
			}
		}

		return null
	}
}
