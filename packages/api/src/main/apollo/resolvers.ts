import * as accountResolver from "./resolvers/accounts"
import * as authResolver from "./resolvers/auth"
import { createRoleMutation } from "./resolvers/roles"

export default {
	Query: {
		// Accounts
		accounts: accountResolver.accountsQuery,
		account: accountResolver.accountQuery,
		accountByEmail: accountResolver.accountByEmailQuery,
		me: accountResolver.accountSessionQuery,
	},
	Mutation: {
		// Accounts
		createAccount: accountResolver.createAccountMutation,
		deleteAccount: accountResolver.deleteAccountMutation,
		updateAccount: accountResolver.updateAccountMutation,

		// Authentication
		createAuthentication: authResolver.createAuthenticationMutation,
		deleteAuthentication: authResolver.deleteAuthenticationMutation,

		// Roles
		createRole: createRoleMutation,
	},
}
