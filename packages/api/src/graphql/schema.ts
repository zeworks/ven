"use strict"

import { gql } from "graphql-tag"
export default gql`
	type TestResponse {
		teste: String!
	}

	type Query {
		hello(name: String!): String!
	}
` as any
