export class InvalidUserError extends Error {
	constructor() {
		super("this user is invalid")
		this.message = "this user is invalid"
		this.stack = "INVALID_USER_ERROR"
		this.name = "InvalidUserError"
	}
}

export class DuplicatedUsernameError extends Error {
	constructor() {
		super("this username already exists")
		this.message = "this username alreadyexists "
		this.stack = "DUPLICATED_USERNAME_ERROR"
		this.name = "DuplicatedUsernameError"
	}
}
