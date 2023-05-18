import { z } from "zod"
import { Base } from "./base"

export const UserRole = z.intersection(
	Base,
	z.object({
		name: z.string({ required_error: "Name is required" }).optional(),
		key: z.string().optional(),
	})
)

export const UserProfile = z.object({
	first_name: z
		.string()
		.min(2, "first name must contain at least 2 characters"),
	last_name: z
		.string()
		.min(2, "last name must contain at least 2 characters")
		.optional(),
	picture: z.string().optional(),
})

export const User = z.intersection(
	Base,
	z.object({
		username: z.string(),
		email: z.string(),
		password: z.string().optional(),
		profile: UserProfile,
	})
)

export const CreateUserData = z.object({
	username: z.string().min(4, "username must contain at least 4 characters"),
	email: z
		.string()
		.min(1, "This field has to be filled.")
		.email("this is not a valid email"),
	password: z.string().optional(),
	profile: UserProfile,
})

export type User = z.TypeOf<typeof User>
export type UserProfile = z.TypeOf<typeof UserProfile>
export type CreateUserData = z.TypeOf<typeof CreateUserData>
