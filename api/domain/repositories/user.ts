import { CreateUserData, User } from "../../../contracts/user"

export type UserRepository = {
	create: (data: CreateUserData & { id: string }) => Promise<User>
}
