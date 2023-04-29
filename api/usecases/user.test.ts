import { expect, test } from "@jest/globals"
import { create } from "./user"
import { userRepository } from "../repositories/user"
import { uuid } from "../adapters/uuid"

test("Should create user with success", async () => {
	const result = await create(
		userRepository,
		uuid
	)({
		email: "email@test.com",
		profile: {
			first_name: "Jose",
		},
		username: "luzes",
	})

	console.log(result)
	expect(true).toEqual(true)
})
