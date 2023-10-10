import gql from "graphql-tag"

export const GRAPHQL_USERS_SCHEMA = gql`
	type User {
		id: String!
		email: String!
	}

	input CreateProfileInput {
		first_name: String!
		last_name: String
		picture: String
	}

	input CreateUserInput {
		email: String!
		password: String
		profile: CreateProfileInput!
		username: String!
	}

	extend type Query {
		getUsers: [User]
		getUserById(id: String!): User
	}

	extend type Mutation {
		createUser(input: CreateUserInput!): User
	}
` as any
