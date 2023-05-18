import { UserRepository } from "../domain/repositories/user"

export const userMemoryRepository: UserRepository = {
	async create(data) {
		return {
			...data,
			createdAt: new Date(),
		}
	},
}
