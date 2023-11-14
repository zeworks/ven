import { apolloControllerAdapter } from "@/main/adapters/apollo-controller"
import { makeCreateAuthenticationController } from "@/main/factories/controllers/authentication/create-authentication-controller-factory"
import { makeDeleteAuthenticationController } from "@/main/factories/controllers/authentication/delete-authentication-controller-factory"

export const createAuthenticationMutation = (_: any, args: any, context: any) =>
	apolloControllerAdapter(makeCreateAuthenticationController(), args, context)

export const deleteAuthenticationMutation = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		makeDeleteAuthenticationController(),
		args,
		context,
		true
	)
