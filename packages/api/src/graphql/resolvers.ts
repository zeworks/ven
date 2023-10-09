import { graphqlControllerAdapter } from "./adapters/graphql-controller-adapter"
import { testController } from "../controllers/test-controller"
import { graphqlResponseAdapter } from "./adapters/graphql-response-adapter"

export default {
	Query: {
		hello: async (_: any, input: any, context: any) =>
			graphqlResponseAdapter(
				await graphqlControllerAdapter(testController)(input, context)
			),
	},
}
