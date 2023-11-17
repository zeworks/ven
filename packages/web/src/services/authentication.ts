import {
	CreateAuthenticationDocument,
	MutationCreateAuthenticationArgs,
	AuthenticationDocument,
} from "@ven/graphql/dist/graphql"
import http from "@/lib/http"
import { useMutation, useQuery } from "react-query"
import { SESSION_TOKEN_KEY } from "@/config/constants"

export const useCreateAuthenticationMutation = () =>
	useMutation(
		"create-authentication",
		(variables: MutationCreateAuthenticationArgs) =>
			http.request(CreateAuthenticationDocument, variables)
	)

export const useAuthenticationQuery = () =>
	useQuery("authentication-query", () => http.request(AuthenticationDocument), {
		enabled: !!localStorage.getItem(SESSION_TOKEN_KEY),
	})
