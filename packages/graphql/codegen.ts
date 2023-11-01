import { CodegenConfig } from "@graphql-codegen/cli"
import "dotenv/config"

// @ts-ignore
module.exports = {
	overwrite: true,
	// @ts-ignore
	schema: process.env.API_SCHEMA_URL,
	documents: ["src/**/*.graphql"],
	generates: {
		"./src/gql/": {
			preset: "client",
		},
	},
} as CodegenConfig
