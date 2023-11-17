import { Base } from "./base"

export type Permission = Base & {
	name: string
	status: boolean
	key: string
	parent?: string | null
}
