import app, { HTTP_PORT } from "./app"

const startServer = () => {
	try {
		app.listen({ port: HTTP_PORT as number })
	} catch (err) {
		app.log.error(err)
		process.exit(1)
	}
}

startServer()
