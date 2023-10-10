import { gql } from "graphql-tag"
import { GRAPHQL_USERS_SCHEMA } from "./schemas/user"

export default gql`
	scalar DateTime
	directive @auth on FIELD_DEFINITION | FIELD

	type Query {
		_: String
	}

	type Mutation {
		_: String
	}

	${GRAPHQL_USERS_SCHEMA}
` as any
