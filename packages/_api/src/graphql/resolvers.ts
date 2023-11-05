import {
	createUserResolver,
	getUserByEmailResolver,
	getUserByIdResolver,
	getUsersResolver,
} from "./resolvers/user"

export default {
	Query: {
		getUsers: getUsersResolver,
		getUserById: getUserByIdResolver,
		getUserByEmail: getUserByEmailResolver,
	},
	Mutation: {
		createUser: createUserResolver,
	},
}
