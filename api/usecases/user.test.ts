import { describe, expect, test } from "@jest/globals"
import { createUserUsecaseFactoryMemory } from "../factories/user"

describe("user usecase", () => {
	test("should create user with success", async () => {
		const result = await createUserUsecaseFactoryMemory({
			email: "teste@email",
			profile: {
				first_name: "John Doe",
			},
			username: "JohnDoe",
		})

		expect(result.username).toEqual("JohnDoe")
		expect(result.id).toBeDefined()
		expect(result.password).toBeUndefined()

		console.log("create user usecase", JSON.stringify(result, null, 2))
	})
})
