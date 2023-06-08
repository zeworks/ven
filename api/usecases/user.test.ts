import { describe, expect, test } from "@jest/globals"
import { createUserUsecaseFactoryMemory } from "../factories/user"
import { getUserByIdUsecase, updateUserUsecase } from "./user"
import { userMemoryRepository } from "../repositories/user.memory"

describe("user usecase", () => {
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
		expect(result.password).toBeUndefined()

		// console.log("create user usecase", JSON.stringify(result, null, 2))
	})

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
			username: "1",
		})

		// console.log("update user usecase", JSON.stringify(result, null, 2))
	})
})
