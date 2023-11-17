import { ApolloServer } from "apollo-server"
import { makeExecutableSchema } from "@graphql-tools/schema"
import resolvers from "./resolvers"
import typeDefs from "./schemas"
import { ApolloServerPluginLandingPageDisabled } from "apollo-server-core/dist/plugin"
import { authDirectiveTransformer } from "./directives/auth-directive"
import ApolloErrors from "./plugins/errors"

export async function createApolloServer() {
	/** generate schema based on typeDefs and resolvers */
	let schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	})

	schema = authDirectiveTransformer(schema)

	const server = new ApolloServer({
		schema,
		cache: "bounded",
		introspection: process.env.NODE_ENV === "development",
		context: ({ req }) => ({ req }),
		formatError: (error) => ({
			message: error.message,
		}),
		plugins: [
			process.env.NODE_ENV === "production"
				? ApolloServerPluginLandingPageDisabled()
				: {},
			ApolloErrors,
		],
	})

	return server.listen({ port: Number(process.env.NODE_PORT) })
}
