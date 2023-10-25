import gql from "graphql-tag"

export const GRAPHQL_USERS_SCHEMA = gql`
	enum Status {
		ACTIVE
		INACTIVE
		BLOCKED
	}

	type Profile {
		first_name: String!
		last_name: String
		picture: String
	}

	type User {
		id: String!
		email: String!
		password: String
		profile: Profile!
		status: Status
		username: String!
		createdAt: DateTime!
		updatedAt: DateTime
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
		status: Status
	}

	extend type Query {
		getUsers: [User]
		getUserById(id: String!): User
		getUserByEmail(email: String!): User
	}

	extend type Mutation {
		createUser(input: CreateUserInput!): User
	}
` as any
