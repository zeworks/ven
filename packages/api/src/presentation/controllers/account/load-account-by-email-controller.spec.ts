import { expect, test } from "vitest"
import { LoadAccountByEmailController } from "./load-account-by-email-controller"
import { makeLoadAccountByEmail } from "@/main/factories/usecases/users/load-account-by-email-usecase-factory"
import { DbLoadAccountByEmail } from "@/data/usecases/users/load-account-by-email"
import { InMemoryUsersRepository } from "@/data/protocols/repositories/users/users-repository-memory"
import { UuidAdapter } from "@/infra/cryptography/uuid"
import { BcryptAdapter } from "@/infra/cryptography/bcrypt-adapter"
import { DbLoadAccountByUsername } from "@/data/usecases/users/load-account-by-username"
import { DbCreateAccount } from "@/data/usecases/users/db-create-account"
import { CreateAccountController } from "./create-account-controller"
import { makeCreateAccountValidation } from "@/main/factories/controllers/account/create-account-validation-factory"

test("load account by email with success", async () => {
	const usersRepository = new InMemoryUsersRepository()

	//#region create account service
	const uuidAdapter = new UuidAdapter()
	const encrypter = new BcryptAdapter(12)
	const dbLoadAccountByEmail = new DbLoadAccountByEmail(usersRepository)
	const dbLoadAccountByUsername = new DbLoadAccountByUsername(usersRepository)
	const createAccountDb = new DbCreateAccount(
		uuidAdapter,
		encrypter,
		dbLoadAccountByEmail,
		dbLoadAccountByUsername,
		usersRepository
	)
	const createAccountController = new CreateAccountController(
		makeCreateAccountValidation(),
		createAccountDb
	)
	//#endregion

	//#region load account by email service
	const account = await createAccountController.execute({
		input: {
			email: "test@test.com",
			username: "user-test",
			password: "user-test",
			status: "ACTIVE",
			profile: {
				firstName: "UserTest",
			},
		},
	})

	const loadAccountByEmailController = new LoadAccountByEmailController(
		dbLoadAccountByEmail
	)
	//#endregion

	const result = await loadAccountByEmailController.execute({
		email: account.data?.email!,
	})

	expect(result.data).toEqual(true)
})
