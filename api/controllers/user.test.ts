import { describe, test } from "@jest/globals"
import { createUserControllerFactoryMemory } from "../factories/user"

describe("user controller", () => {
	test("create user with success", async () => {
		const result = await createUserControllerFactoryMemory({
			email: "ss@dd.com",
			profile: {
				first_name: "t2",
			},
			username: "JohnDoe",
		})

		console.log("create user controller", JSON.stringify(result, null, 2))
	})
})
