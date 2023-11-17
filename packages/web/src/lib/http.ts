import { SESSION_TOKEN_KEY } from "@/config/constants"
import { GraphQLClient } from "graphql-request"

const http = new GraphQLClient("/api")

const token = localStorage.getItem(SESSION_TOKEN_KEY)
if (token) http.setHeader(`authorization`, token)

export default http
