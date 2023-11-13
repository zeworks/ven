import { gql } from "apollo-server"

export default gql`
	type UserProfile {
		firstName: String!
		lastName: String
		picture: String
	}

	type User {
		id: String!
		username: String!
		email: String!
		status: Boolean
		profile: UserProfile
		role: Role
		accessToken: String
	}

	input CreateUserProfileInput {
		firstName: String!
		lastName: String
		picture: String
	}

	input UpdateUserProfileInput {
		firstName: String
		lastName: String
		picture: String
	}

	input ClientID {
		id: String!
	}

	input CreateAccount {
		username: String!
		email: String!
		status: Boolean
		password: String
		profile: CreateUserProfileInput
		role: String
	}

	input UpdateAccountInput {
		username: String
		password: String
		profile: UpdateUserProfileInput
		role: String
	}

	type UsersDatatable {
		total: Int
		data: [User]
	}

	extend type Mutation {
		createAccount(input: CreateAccount): User @auth
		deleteAccount(id: String!): Boolean @auth
		updateAccount(id: String!, input: UpdateAccountInput!): User @auth
	}

	extend type Query {
		accounts: UsersDatatable @auth
		account(id: String!): User @auth
	}
`
