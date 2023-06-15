import { z } from "zod"
import { Base } from "./base"
import { Schema } from "./schema"

export const Project = z.intersection(
	Base,
	z.object({
		name: z.string(),
		schema: Schema,
	})
)
