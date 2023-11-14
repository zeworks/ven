import { makeExecutableSchema } from "@graphql-tools/schema"
import Fastify from "fastify"
import mercurius from "mercurius"
import typeDefs from "./schemas"
import resolvers from "./resolvers"

export default function createFastifyServer() {
	const app = Fastify({
		logger: true,
	})

	app.register(mercurius, {
		schema: makeExecutableSchema({
			typeDefs,
			resolvers,
		}),
		resolvers,
		graphiql: true,
	})

	try {
		return app.listen({ port: Number(process.env.NODE_PORT || 4000) })
	} catch (err) {
		app.log.error(err)
		process.exit(1)
	}
}
