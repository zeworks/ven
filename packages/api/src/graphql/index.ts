const fs = require("fs")
const path = require("path")

const directoryPath = "src/graphql/schemas"
const files: any[] = fs.readdirSync(directoryPath) // Read the directory synchronously
const graphqlFiles = files.filter((file) => path.extname(file) === ".graphql")

const fileContents = graphqlFiles.map((file) => {
	const filePath = path.join(directoryPath, file)
	return fs.readFileSync(filePath, "utf8")
})

export default fileContents
