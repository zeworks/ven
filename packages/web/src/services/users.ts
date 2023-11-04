import {
	GetUsersDocument,
	CreateUserDocument,
	CreateUserMutationVariables,
} from "@ven/graphql/dist/gql/graphql"
import request from "graphql-request"
import { useMutation, useQuery } from "react-query"

// load users
export const loadUsers = async () => request("/api", GetUsersDocument)
export const useGetUsersQuery = () => useQuery("get-users", loadUsers)

// create user
export const createUser = async (
	variables: CreateUserMutationVariables["variables"]
) => request("/api", CreateUserDocument, { variables })
export const useCreateUserMutation = () =>
	useMutation("create-user", createUser)
