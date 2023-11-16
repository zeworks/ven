import {
	accountQuery,
	accountsQuery,
	createAccountMutation,
	deleteAccountMutation,
	accountSessionQuery,
	updateAccountMutation,
	accountByEmailQuery,
} from "./resolvers/accounts"
import {
	createAuthenticationMutation,
	deleteAuthenticationMutation,
} from "./resolvers/auth"
import { createRoleMutation } from "./resolvers/roles"

export default {
	Query: {
		// Accounts
		accounts: accountsQuery,
		account: accountQuery,
		accountByEmail: accountByEmailQuery,
		me: accountSessionQuery,
	},
	Mutation: {
		// Accounts
		createAccount: createAccountMutation,
		deleteAccount: deleteAccountMutation,
		updateAccount: updateAccountMutation,

		// Authentication
		createAuthentication: createAuthenticationMutation,
		deleteAuthentication: deleteAuthenticationMutation,

		// Roles
		createRole: createRoleMutation,
	},
}
