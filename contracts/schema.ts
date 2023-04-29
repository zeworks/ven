import { z } from "zod"
import { Model } from "./model"

export const Schema = z.object({
	models: z.array(Model).optional(),
})

export type Schema = z.TypeOf<typeof Schema>
