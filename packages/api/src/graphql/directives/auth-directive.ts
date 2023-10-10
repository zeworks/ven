// import { GraphQLSchema } from "graphql"
// import { MapperKind, mapSchema, getDirective } from "@graphql-tools/utils"

// export const authDirectiveTransformer = (
// 	schema: GraphQLSchema
// ): GraphQLSchema => {
// 	return mapSchema(schema, {
// 		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
// 			const hasAuthDirective = getDirective(schema, fieldConfig, "auth")

// 			if (hasAuthDirective) {
// 				const { resolve } = fieldConfig
// 				fieldConfig.resolve = async (parent, args, context, info) => {
// 					const request = {
// 						accessToken: context?.req?.headers?.["authorization"],
// 					}

// 					const httpResponse = await makeAuthMiddleware().handle(request)
// 					if (httpResponse.statusCode === 200) {
// 						Object.assign(context?.req, httpResponse.data)
// 						return resolve?.call(this, parent, args, context, info)
// 					} else {
// 						throw new Error(httpResponse.data.message)
// 					}
// 				}
// 			}
// 			return fieldConfig
// 		},
// 	})
// }
