import { z } from "zod"

export const Base = z.object({
	id: z.string(),
	createdAt: z.date(),
	updatedAt: z.string().nullable().optional(),
})

export type Base = z.TypeOf<typeof Base>
