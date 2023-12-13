import * as z from "zod"

export const Base = z.object({
	id: z.string(),
	createdAt: z.date().optional().nullable(),
	updatedAt: z.date().optional().nullable(),
})

export type Base = z.infer<typeof Base>
