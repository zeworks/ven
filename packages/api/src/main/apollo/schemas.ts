import path from "path"
import fs from "fs"
import { gql } from "apollo-server-core"

const graphqlFilesDir = path.join(__dirname, "schemas")
const graphqlFiles = fs
	.readdirSync(graphqlFilesDir)
	.filter((file) => file.endsWith(".graphql"))
	.map((file) => fs.readFileSync(path.join(graphqlFilesDir, file), "utf-8"))

export default graphqlFiles.map((fileContent) => gql(fileContent))
