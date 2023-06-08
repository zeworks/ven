import { User } from "../../contracts/user"
import { UserRepository } from "../domain/repositories/user"

export const userRepository: UserRepository & { users?: User[] } = {
	users: [],

	async create(data) {
		const newUser = { ...data, createdAt: new Date() }
		this.users?.push(newUser)

		return newUser
	},

	async get(id) {
		return this.users?.find((u) => u.id === id) || null
	},

	async update(data, id) {
		const user = this.users?.find((u) => u.id === id) || {}

		return Object.assign(user, {
			...data,
		})
	},
}
