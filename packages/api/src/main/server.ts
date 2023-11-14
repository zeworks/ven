import "module-alias/register"
import dotenv from "dotenv"
dotenv.config()

// import { createApolloServer } from "./apollo/create-apollo-server"
import createServer from "./apollo/create-server"

// createApolloServer().then(({ url }) =>
// 	console.log(`🚀 Server listening on: ${url}`)
// )

createServer().then((path) => {
	console.log(`🚀 Server listening on: ${path}`)
})
