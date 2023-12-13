import { expect, it, test } from "vitest"
import { DbCreateAuthentication } from "./create-authentication-usecase"
import { DbLoadAccountByEmail } from "../users/load-account-by-email"
import { InMemoryUsersRepository } from "@/data/protocols/repositories/users/users-repository-memory"
import { JwtAdapter } from "@/infra/cryptography/jwt-adapter"
import { BcryptAdapter } from "@/infra/cryptography/bcrypt-adapter"
import { ZodError, ZodErrorMap } from "zod"
import { DbCreateAccount } from "../users/db-create-account"
import { UuidAdapter } from "@/infra/cryptography/uuid"
import { DbLoadAccountByUsername } from "../users/load-account-by-username"

test("create authentication with success", async () => {
	const usersRepository = new InMemoryUsersRepository()
	const dbLoadAccountByEmail = new DbLoadAccountByEmail(usersRepository)
	const dbLoadAccountByUsername = new DbLoadAccountByUsername(usersRepository)
	const encrypter = new JwtAdapter("teste")
	const bcrypt = new BcryptAdapter(8)
	const uuidAdapter = new UuidAdapter()

	const dbCreateAccount = new DbCreateAccount(
		uuidAdapter,
		bcrypt,
		dbLoadAccountByEmail,
		dbLoadAccountByUsername,
		usersRepository
	)

	const dbCreateAuthentication = new DbCreateAuthentication(
		dbLoadAccountByEmail,
		bcrypt,
		encrypter,
		usersRepository
	)

	try {
		await dbCreateAccount.create({
			email: "teste@do.com",
			profile: {
				firstName: "teste",
			},
			username: "jose",
			password: "teste",
			status: "ACTIVE",
		})

		const result = await dbCreateAuthentication.authenticate({
			email: "teste@do.com",
			password: "teste",
		})

		expect(result?.email).toEqual("teste@do.com")
	} catch (error) {
		console.error(error)
	}
})
