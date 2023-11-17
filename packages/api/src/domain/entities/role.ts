import { Base } from "./base"
import { Permission } from "./permission"

export type Role = Base & {
	name: string
	key: string
	status?: boolean
	permissions?: Permission[] | null
}
