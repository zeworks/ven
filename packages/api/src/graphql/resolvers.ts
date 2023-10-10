import {
	createUserResolver,
	getUserByIdResolver,
	getUsersResolver,
} from "./resolvers/user"

export default {
	Query: {
		getUsers: getUsersResolver,
		getUserById: getUserByIdResolver,
	},
	Mutation: {
		createUser: createUserResolver,
	},
}
