import { gql } from "graphql-tag"

export default gql`
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

	type Query {
		_: String
		getUsers: [User]
		getUserById(id: String!): User
	}

	type Mutation {
		createUser(input: CreateUserInput!): User
	}
` as any
