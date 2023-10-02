import { User } from "@ven/contracts/dist/user"
import { UserRepository } from "../domain/repositories/user"

export const userMemoryRepository: UserRepository & { users?: User[] } = {
	users: [],

	async create(data) {
		const newUser = { ...data, createdAt: new Date() }
		this.users?.push(newUser)
		return newUser
	},

	async get(id) {
		return this.users?.find((u) => u.id === id) || null
	},

	async getUsername(username) {
		return this.users?.find((u) => u.username === username) || null
	},

	async getEmail(email) {
		return this.users?.find((u) => u.email === email) || null
	},

	async update(data, id) {
		const user = this.users?.find((u) => u.id === id) || {}
		return Object.assign({}, user, data)
	},
}
