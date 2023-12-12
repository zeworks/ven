import { User, Profile } from "@/domain/entities/user"
import { z } from "zod"
import { CreateAccountUseCaseInput } from "./create-account"

export const UpdateAccountUseCaseInput = CreateAccountUseCaseInput.partial()

export const UpdateAccountUseCaseOutput = User.nullable()

export type UpdateAccountUseCaseInput = z.infer<
	typeof UpdateAccountUseCaseInput
>
export type UpdateAccountUseCaseOutput = z.infer<
	typeof UpdateAccountUseCaseOutput
>

export type UpdateAccountUseCaseFn = (
	id: string,
	input: UpdateAccountUseCaseInput
) => Promise<UpdateAccountUseCaseOutput>

export interface UpdateAccountUseCase {
	update: UpdateAccountUseCaseFn
}
