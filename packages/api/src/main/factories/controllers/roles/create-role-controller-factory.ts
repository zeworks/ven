import { CreateRoleController } from "@/presentation/controllers/roles/create-role-controller"
import { Controller } from "@/presentation/protocols/controller"
import { makeDbCreateRoleUseCase } from "../../usecases/roles/create-role-usecase-factory"
import { makeCreateRoleValidation } from "./create-role-validation-factory"

export const makeCreateRoleController = (): Controller => {
	return new CreateRoleController(
		makeCreateRoleValidation(),
		makeDbCreateRoleUseCase()
	)
}
