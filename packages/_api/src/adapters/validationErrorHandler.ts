import { SafeParseError } from "zod"

export const validationErrorHandler = (error: SafeParseError<any>): Error => {
	const [_error] = error.error.errors

	return {
		message: _error.message,
		name: _error.code,
	}
}
