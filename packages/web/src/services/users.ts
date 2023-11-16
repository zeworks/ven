import http from "@/lib/http"
import {
	AccountsDocument,
	MutationCreateAccountArgs,
	CreateAccountDocument,
} from "@ven/graphql/dist/graphql"
import { useMutation, useQuery } from "react-query"

// load users
export const useGetUsersQuery = () =>
	useQuery("get-users", () => http.request(AccountsDocument))

// create user
export const useCreateUserMutation = () =>
	useMutation("create-user", (variables: MutationCreateAccountArgs) =>
		http.request(CreateAccountDocument, variables)
	)
