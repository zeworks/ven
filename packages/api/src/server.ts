import Fastify from "fastify"
import mercurius from "mercurius"
import resolvers from "./graphql/resolvers"
import schema from "./graphql/schema"
import { makeExecutableSchema } from "@graphql-tools/schema"
import "dotenv/config"

const HTTP_PORT = process.env.PORT || 4000

const app = Fastify({
	logger: process.env.NODE_ENV !== "production",
})

app.register(mercurius, {
	schema: makeExecutableSchema({ typeDefs: schema }),
	resolvers,
	graphiql: process.env.NODE_ENV === "development" ? "graphiql" : false,
})

const start = () => {
	try {
		app.listen({ port: HTTP_PORT as number })
	} catch (err) {
		app.log.error(err)
		process.exit(1)
	}
}
start()
