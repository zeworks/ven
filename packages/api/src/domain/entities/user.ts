import * as z from "zod"
import { Base } from "./base"
import { Role } from "./role"

export const Status = z.enum(["INACTIVE", "PENDING", "ACTIVE"])

export const Profile = z.object({
	firstName: z.string(),
	lastName: z.string().optional().nullable(),
	picture: z.string().optional().nullable(),
})

export const User = Base.merge(
	z.object({
		username: z.string(),
		email: z.string(),
		status: Status.default("PENDING"),
		accessToken: z.string().optional().nullable(),
		password: z.string().optional().nullable(),
		role: Role.optional().nullable(),
		profile: Profile,
	})
)

export type Status = z.infer<typeof Status>
export type User = z.infer<typeof User>
export type Profile = z.infer<typeof Profile>
