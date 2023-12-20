import http from "@/lib/http"
import {
	AccountsDocument,
	MutationCreateAccountArgs,
	CreateAccountDocument,
	AccountByEmailDocument,
	QueryAccountByEmailArgs,
} from "@ven/graphql/dist/graphql"
import { useMutation, useQuery } from "react-query"

export const useGetAccountsQuery = () =>
	useQuery("get-accounts", () => http.request(AccountsDocument), {
		refetchOnWindowFocus: false,
	})

export const useGetAccountByEmailQuery = () =>
	useMutation("get-account-by-email", (variables: QueryAccountByEmailArgs) =>
		http.request(AccountByEmailDocument, variables)
	)

export const useCreateAccountMutation = () =>
	useMutation("create-account", (variables: MutationCreateAccountArgs) =>
		http.request(CreateAccountDocument, variables)
	)
