import { CreateUserData } from "../../contracts/user"
import { UUID } from "../domain/protocols/uuid"
import { UserRepository } from "../domain/repositories/user"

export const createUserUsecase =
	(repository: UserRepository, uuid: UUID) => (request: CreateUserData) =>
		repository.create({
			...request,
			id: uuid.generate(),
			status: request.status || "INACTIVE",
		})
