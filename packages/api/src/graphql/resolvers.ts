import { graphqlRequestAdapter } from "../adapters/graphql-request-adapter"
import { testController } from "../controllers/test-controller"

export default {
	Query: {
		hello: (_: any, input: any, context: any) =>
			graphqlRequestAdapter(testController, input, context),
	},
}
