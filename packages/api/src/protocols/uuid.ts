import { V4Options, v4 as uuid } from "uuid"

export interface UUID {
	generate: (options?: V4Options) => string
}
