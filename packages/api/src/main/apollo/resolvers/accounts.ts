import { PermissionKey } from "@/config/permissions"
import { apolloControllerAdapter } from "@/main/adapters/apollo-controller"
import { AclDecorator } from "@/main/decorators/acl-decorator"
import { makeCreateAccountController } from "@/main/factories/controllers/account/create-account-controller-factory"
import { makeDeleteAccountController } from "@/main/factories/controllers/account/delete-account-controller-factory"
import { makeLoadAccountByContextIdController } from "@/main/factories/controllers/account/load-account-by-context-id-controller-factory"
import { makeLoadAccountByEmailController } from "@/main/factories/controllers/account/load-account-by-email-controller-factory"
import { makeLoadAccountByIdController } from "@/main/factories/controllers/account/load-account-by-id-controller-factory"
import { makeLoadAccountsController } from "@/main/factories/controllers/account/load-accounts-controller-factory"
import { makeUpdateAccountController } from "@/main/factories/controllers/account/update-account-controller-factory"

export const createAccountMutation = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		new AclDecorator(makeCreateAccountController(), PermissionKey.UsersCreate),
		args,
		context,
		true
	)

export const deleteAccountMutation = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		new AclDecorator(makeDeleteAccountController(), PermissionKey.UsersDelete),
		args,
		context,
		true
	)

export const updateAccountMutation = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		new AclDecorator(makeUpdateAccountController(), PermissionKey.UsersUpdate),
		args,
		context,
		true
	)

export const accountsQuery = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		new AclDecorator(makeLoadAccountsController(), PermissionKey.UsersView),
		args,
		context,
		true
	)

export const accountQuery = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		new AclDecorator(makeLoadAccountByIdController(), PermissionKey.UsersView),
		args,
		context,
		true
	)

export const accountSessionQuery = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		makeLoadAccountByContextIdController(),
		args,
		context,
		true
	)

export const accountByEmailQuery = (_: any, args: any, context: any) =>
	apolloControllerAdapter(
		makeLoadAccountByEmailController(),
		args,
		context,
		true
	)
