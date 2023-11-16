import { SESSION_TOKEN_KEY } from "@/config/constants"
import { GraphQLClient } from "graphql-request"

const http = new GraphQLClient("/api")

http.setHeader(`authorization`, `${localStorage.getItem(SESSION_TOKEN_KEY)}`)

export default http
