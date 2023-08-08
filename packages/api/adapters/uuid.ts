import { v4 } from "uuid"
import { UUID } from "../protocols/uuid"

export const uuid: UUID = {
	generate: v4,
}
