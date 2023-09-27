import { describe, expect, test } from "@jest/globals"
import { createUserUsecaseFactoryMemory } from "../factories/user"
import { getUserByIdUsecase, updateUserUsecase } from "./user"
import { userMemoryRepository } from "../repositories/user.memory"
import {
	ERROR_USER_EMAIL_INVALID,
	ERROR_USER_USERNAME_MINLENGTH,
} from "../../contracts/src/user"
import {
	DuplicatedEmailError,
	DuplicatedUsernameError,
	InvalidUserError,
} from "../domain/errors/user"

describe("[USECASE] CREATE USER", () => {
	test("should create user with success", async () => {
		const result = await createUserUsecaseFactoryMemory({
			email: "teste@email.com",
			profile: {
				first_name: "John Doe",
			},
			username: "JohnDoe",
		})

		expect(result.username).toEqual("JohnDoe")
		expect(result.id).toBeDefined()
		// console.log("create user usecase", JSON.stringify(result, null, 2))
	})

	test("should throw an error if creating user with invalid email", async () => {
		expect(
			await createUserUsecaseFactoryMemory({
				email: "teste@email",
				profile: {
					first_name: "John Doe",
				},
				username: "JohnDoe",
			})
		).toEqual(expect.objectContaining({ message: ERROR_USER_EMAIL_INVALID }))

		// console.log("create user usecase", JSON.stringify(result, null, 2))
	})

	test("should throw an error if creating user with invalid username length", async () => {
		const result = await createUserUsecaseFactoryMemory({
			email: "teste@email",
			profile: {
				first_name: "John Doe",
			},
			username: "J",
		})

		expect(result).toEqual(
			expect.objectContaining({ message: ERROR_USER_USERNAME_MINLENGTH })
		)

		// console.log(
		// 	"should throw an error if creating user with invalid username length",
		// 	JSON.stringify(result, null, 2)
		// )
	})

	test("should throw an error if duplicated username", async () => {
		await createUserUsecaseFactoryMemory({
			email: "teste1@email.com",
			profile: {
				first_name: "John Doe",
			},
			username: "JohnDoe2",
		})

		try {
			await createUserUsecaseFactoryMemory({
				email: "teste2@email.com",
				profile: {
					first_name: "John Doe",
				},
				username: "JohnDoe",
			})
		} catch (error) {
			expect(error).toEqual(new DuplicatedUsernameError())
		}
	})

	test("should throw an error if duplicated email", async () => {
		await createUserUsecaseFactoryMemory({
			email: "teste3@email.com",
			profile: {
				first_name: "John Doe",
			},
			username: "JohnDoe3",
		})

		try {
			await createUserUsecaseFactoryMemory({
				email: "teste3@email.com",
				profile: {
					first_name: "John Doe",
				},
				username: "JohnDo4",
			})
		} catch (error) {
			expect(error).toEqual(new DuplicatedEmailError())
		}
	})

	test("should return password hashed based on the user email", async () => {
		const result = await createUserUsecaseFactoryMemory({
			email: "johnDoe@mail.com",
			profile: {
				first_name: "John Doe",
			},
			username: "JohnDo4",
		})

		expect(result.password).toBeDefined()
		// console.log(
		// 	"should return password hashed based on the user email",
		// 	JSON.stringify(result, null, 2)
		// )
	})

	test("should return password created by the user", async () => {
		const result = await createUserUsecaseFactoryMemory({
			email: "johnDoee@mail.com",
			profile: {
				first_name: "John Doe",
			},
			password: "#12.#33",
			username: "JohnDo4e",
		})

		expect(result.password).toBeDefined()
		expect(result.password).toEqual("#12.#33")

		// console.log(
		// 	"should return password created by the user",
		// 	JSON.stringify(result, null, 2)
		// )
	})
})

describe("[USECASE] UPDATE USER", () => {
	// TODO: update user use case
	test("should update user with success", async () => {
		const user = await userMemoryRepository.create({
			id: "1",
			email: "sd@dd.com",
			profile: {
				first_name: "123123",
			},
			username: "joasdna",
		})

		const result = await updateUserUsecase(
			userMemoryRepository,
			getUserByIdUsecase
		)({
			...user,
			username: "Joasdasd",
		})

		expect(result.email).toEqual(user.email)
		expect(result.createdAt).toEqual(user.createdAt)
		expect(result.username).not.toEqual(user.username)

		// console.log(
		// 	"should update user with success",
		// 	JSON.stringify({ result, user }, null, 2)
		// )
	})

	test("should throw an error, if user not found, on update", async () => {
		const user = await userMemoryRepository.create({
			id: "1",
			email: "sd@dd.com",
			profile: {
				first_name: "123123",
			},
			username: "joasdna",
		})

		expect(
			updateUserUsecase(
				userMemoryRepository,
				getUserByIdUsecase
			)({
				...user,
				id: "123",
				username: "112312",
			})
		).rejects.toThrow(InvalidUserError)
	})
})
