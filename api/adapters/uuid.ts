import { v4 } from "uuid"
import { UUID } from "../domain/protocols/uuid"

export const uuid: UUID = {
	generate: v4,
}
