import { Base } from "./base"
import { Role } from "./role"

export type Profile = {
	firstName: string
	lastName?: string | null
	picture?: string | null
}

export type User = Base & {
	username: string
	email: string
	profile: Profile
	status?: boolean | null
	accessToken?: string | null
	password?: string | null
	readonly role?: Role | null
}
