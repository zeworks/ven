// TODO: remove memory factory, use the real one

import { CreateUserData } from "@ven/contracts/dist/user"
import { GraphqlResolver } from "../types/graphql-resolver"
import { graphqlResponseAdapter } from "../adapters/graphql-response-adapter"
import { graphqlControllerAdapter } from "../adapters/graphql-controller-adapter"
import {
	createUserControllerFactoryMemory,
	getUserByEmailControllerFactoryMemory,
	getUserByIdControllerFactoryMemory,
	getUsersControllerFactoryMemory,
} from "../../factories/user"

export const createUserResolver: GraphqlResolver<{
	input: CreateUserData
}> = async (_, input, context) =>
	graphqlResponseAdapter(
		await graphqlControllerAdapter(createUserControllerFactoryMemory)(
			input.input,
			context
		)
	)

export const getUsersResolver: GraphqlResolver = async (_, input, context) =>
	graphqlResponseAdapter(
		await graphqlControllerAdapter(getUsersControllerFactoryMemory)(
			input,
			context
		)
	)

export const getUserByIdResolver: GraphqlResolver = async (_, input, context) =>
	graphqlResponseAdapter(
		await graphqlControllerAdapter(getUserByIdControllerFactoryMemory)(
			input,
			context
		)
	)

export const getUserByEmailResolver: GraphqlResolver = async (
	_,
	input,
	context
) =>
	graphqlResponseAdapter(
		await graphqlControllerAdapter(getUserByEmailControllerFactoryMemory)(
			input,
			context
		)
	)
