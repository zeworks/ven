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
		this.message = "this username already exists "
		this.stack = "DUPLICATED_USERNAME_ERROR"
		this.name = "DuplicatedUsernameError"
	}
}

export class DuplicatedEmailError extends Error {
	constructor() {
		super("this email already exists")
		this.message = "this email already exists "
		this.stack = "DUPLICATED_EMAIL_ERROR"
		this.name = "DuplicatedEmailError"
	}
}
