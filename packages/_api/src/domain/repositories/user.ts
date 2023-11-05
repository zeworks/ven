import { CreateUserData, UpdateUserData, User } from "@ven/contracts/dist/user"

export type UserRepository = {
	create: (data: CreateUserData & { id: string }) => Promise<User>
	update: (data: UpdateUserData, id: string) => Promise<User>
	// delete: (id: string) => Promise<boolean>
	get: (id: string) => Promise<User | null>
	getUsername: (username: string) => Promise<User | null>
	getEmail: (email: string) => Promise<User | null>
	list: () => Promise<Array<User>>
}
