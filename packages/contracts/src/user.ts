import { z } from "zod"
import { Base } from "./base"

//#region error messages
export const ERROR_USER_ROLE_NAME_REQUIRED = "field name is required"
export const ERROR_USER_EMAIL_REQUIRED = "field email is required"
export const ERROR_USER_EMAIL_INVALID = "this is not a valid email"
export const ERROR_USER_FIRSTNAME_MINLENGTH =
	"first name must contain at least 2 characters"
export const ERROR_USER_LASTNAME_MINLENGTH =
	"last name must contain at least 2 characters"
export const ERROR_USER_USERNAME_MINLENGTH =
	"username must contain at least 4 characters"
//#endregion error messages

export const Role = z.intersection(
	Base,
	z.object({
		name: z
			.string({ required_error: ERROR_USER_ROLE_NAME_REQUIRED })
			.optional(),
		key: z.string().optional(),
	})
)

export const Profile = z.object({
	first_name: z.string().min(2, ERROR_USER_FIRSTNAME_MINLENGTH),
	last_name: z.string().min(2, ERROR_USER_LASTNAME_MINLENGTH).optional(),
	picture: z.string().optional(),
})

export const Status = z.enum(["ACTIVE", "INACTIVE", "BLOCKED"])

export const User = Base.merge(
	z.object({
		username: z.string().min(4, ERROR_USER_USERNAME_MINLENGTH),
		email: z
			.string()
			.min(1, ERROR_USER_EMAIL_REQUIRED)
			.email(ERROR_USER_EMAIL_INVALID),
		password: z.string().optional(),
		profile: Profile,
		status: Status.default("INACTIVE").optional(),
	})
)

export const CreateUserData = User.omit({ id: true, createdAt: true })
export const UpdateUserData = User

export type User = z.TypeOf<typeof User>
export type Status = z.TypeOf<typeof Status>
export type Profile = z.TypeOf<typeof Profile>
export type Role = z.TypeOf<typeof Role>
export type CreateUserData = z.TypeOf<typeof CreateUserData>
export type UpdateUserData = z.TypeOf<typeof UpdateUserData>
