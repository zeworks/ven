export class NotFoundError extends Error {
	constructor(message?: string, stack?: string) {
		super("Not found error")
		this.name = "NotFoundError"
		this.message = message || "Not found Error"
		this.stack = stack
	}
}
