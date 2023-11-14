import { SESSION_TOKEN_KEY } from "@/config/constants"
import { GraphQLClient } from "graphql-request"

const client = new GraphQLClient("/api")

client.setHeader(`authorization`, `${localStorage.getItem(SESSION_TOKEN_KEY)}`)

export default client
