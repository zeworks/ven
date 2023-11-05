import Fastify from "fastify"
import mercurius from "mercurius"
import resolvers from "./graphql/resolvers"
import { makeExecutableSchema } from "@graphql-tools/schema"
import typeDefs from "./graphql"
import "dotenv/config"

export const HTTP_PORT = process.env.PORT || 4000

const app = Fastify({
	logger: process.env.NODE_ENV !== "production",
})

app.register(mercurius, {
	schema: makeExecutableSchema({ typeDefs, resolvers }),
	graphiql: process.env.NODE_ENV === "development" ? "graphiql" : false,
})

export default app
