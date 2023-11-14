import { makeAuthMiddleware } from "@/main/factories/middlewares/auth-middleware-factory"
import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils"
import { ForbiddenError } from "apollo-server-express"
import { GraphQLSchema } from "graphql"
import { MercuriusContext } from "mercurius"

export const authDirectiveTransformer = (
	schema: GraphQLSchema
): GraphQLSchema => {
	return mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const hasAuthDirective = getDirective(schema, fieldConfig, "auth")

			if (hasAuthDirective) {
				const { resolve } = fieldConfig

				fieldConfig.resolve = async (
					parent,
					args,
					context: MercuriusContext,
					info
				) => {
					const request = {
						accessToken: context?.reply?.request?.headers?.["authorization"],
					}

					const httpResponse = await makeAuthMiddleware().handle(request)

					if (httpResponse.statusCode === 200) {
						Object.assign(context, httpResponse.data)
						return resolve?.call(this, parent, args, context, info)
					} else {
						throw new ForbiddenError((httpResponse?.data as any)?.message)
					}
				}
			}
			return fieldConfig
		},
	})
}
