import * as z from "zod"
import { Base } from "./base"

export const Permission = Base.merge(
	z.object({
		name: z.string(),
		status: z.boolean().default(true),
		key: z.string(),
		parent: z.string().optional().nullable(),
	})
)

export type Permission = z.infer<typeof Permission>
