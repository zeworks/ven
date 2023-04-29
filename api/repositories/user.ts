import { UserRepository } from "../domain/repositories/user"

export const userRepository: UserRepository = {
	async create(data) {
		return {
			...data,
			createdAt: new Date(),
		}
	},
}
