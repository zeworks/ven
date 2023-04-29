import { CreateUserUseCaseFn } from "../domain/usecases/user"

export const create: CreateUserUseCaseFn = (repo, uuid) => (user) => {
	const id = uuid.generate()
	return repo.create({ id, ...user })
}
