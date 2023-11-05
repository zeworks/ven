import { describe, expect, test } from "@jest/globals"
import { createUserControllerFactoryMemory } from "../factories/user"
import {
	ERROR_USER_EMAIL_INVALID,
	ERROR_USER_USERNAME_MINLENGTH,
} from "@ven/contracts/dist/user"

describe("[CONTROLLER] CREATE USER", () => {
	test("create user with success", async () => {
		const result = await createUserControllerFactoryMemory({
			email: "ss@dd.com",
			profile: {
				first_name: "t2",
			},
			username: "JohnDoe",
		})

		// console.log(JSON.stringify(result, null, 2))
		expect(result.data.email).toEqual("ss@dd.com")
		expect(result.data.username).toEqual("JohnDoe")
	})

	test("on create user, throw an error if invalid email", async () => {
		const result = await createUserControllerFactoryMemory({
			email: "ss@dd",
			profile: {
				first_name: "t2",
			},
			username: "JohnDoe",
		})
		expect(result.statusCode).toEqual(400)
		expect((result.data as unknown as Error).message).toEqual(
			ERROR_USER_EMAIL_INVALID
		)
		// console.log(JSON.stringify(result, null, 2))
	})

	test("on create user, throw an error if invalid username min length", async () => {
		const result = await createUserControllerFactoryMemory({
			email: "ss@dd",
			profile: {
				first_name: "t2",
			},
			username: "J",
		})
		expect(result.statusCode).toEqual(400)
		expect((result.data as unknown as Error).message).toEqual(
			ERROR_USER_USERNAME_MINLENGTH
		)
		// console.log(JSON.stringify(result, null, 2))
	})
})
