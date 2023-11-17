import * as z from "zod"
import { User } from "./user"
import { ERROR_EMAIL_INVALID, ERROR_EMAIL_REQUIRED } from "./errors"

export const Session = User.merge(
	z.object({
		accessToken: z.string(),
	})
)

export const CreateSessionInput = z.object({
	email: z.string().min(1, ERROR_EMAIL_REQUIRED).email(ERROR_EMAIL_INVALID),
	password: z.string(),
})

export type Session = z.TypeOf<typeof Session>
export type CreateSessionInput = z.TypeOf<typeof CreateSessionInput>
