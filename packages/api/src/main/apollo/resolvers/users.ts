import { PermissionKey } from "@/config/permissions"
import { apolloControllerAdapter } from "@/main/adapters/apollo-controller"
import { AclDecorator } from "@/main/decorators/acl-decorator"
import { makeCreateAccountController } from "@/main/factories/controllers/users/create-account-controller-factory"
import { makeDeleteAccountController } from "@/main/factories/controllers/users/delete-account-controller-factory"
import { makeLoadAccountByIdController } from "@/main/factories/controllers/users/load-account-by-id-controller-factory"
import { makeLoadAccountsController } from "@/main/factories/controllers/users/load-accounts-controller-factory"
import { makeUpdateAccountController } from "@/main/factories/controllers/users/update-account-controller-factory"

export default {
	Mutation: {
		createAccount: (_: any, args: any, context: any) =>
			apolloControllerAdapter(
				new AclDecorator(
					makeCreateAccountController(),
					PermissionKey.UsersCreate
				),
				args,
				context
			),
		deleteAccount: (_: any, args: any, context: any) =>
			apolloControllerAdapter(
				new AclDecorator(
					makeDeleteAccountController(),
					PermissionKey.UsersDelete
				),
				args,
				context
			),
		updateAccount: (_: any, args: any, context: any) =>
			apolloControllerAdapter(
				new AclDecorator(
					makeUpdateAccountController(),
					PermissionKey.UsersUpdate
				),
				args,
				context
			),
	},
	Query: {
		account: (_: any, args: any, context: any) =>
			apolloControllerAdapter(
				new AclDecorator(
					makeLoadAccountByIdController(),
					PermissionKey.UsersView
				),
				args,
				context
			),
		accounts: (_: any, args: any, context: any) => {
			return apolloControllerAdapter(
				new AclDecorator(makeLoadAccountsController(), PermissionKey.UsersView),
				args,
				context
			)
		},
	},
}
