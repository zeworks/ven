import {
	CreateAuthenticationDocument,
	MutationCreateAuthenticationArgs,
	AuthenticationDocument,
} from "@ven/graphql/dist/graphql"
import http from "@/lib/http"
import { useMutation, useQuery } from "react-query"

export const useCreateAuthenticationMutation = () =>
	useMutation(
		"create-authentication",
		(variables: MutationCreateAuthenticationArgs) =>
			http.request(CreateAuthenticationDocument, variables)
	)

export const useAuthenticationQuery = (token?: string) => {
	if (token) http.setHeader(`authorization`, token)

	return useQuery(
		["authentication-query", token],
		() => http.request(AuthenticationDocument),
		{
			enabled: !!token,
		}
	)
}
