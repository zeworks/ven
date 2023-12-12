import * as z from "zod"
import { Base } from "./base"
import { Permission } from "./permission"

export const Role = Base.merge(
	z.object({
		name: z.string(),
		key: z.string(),
		status: z.boolean().default(true).optional().nullable(),
		permissions: z.array(Permission).optional().nullable(),
	})
)

export type Role = z.infer<typeof Role>
