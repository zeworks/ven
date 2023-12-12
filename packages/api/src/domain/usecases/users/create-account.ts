import { Status, User } from "@/domain/entities/user"
import * as z from "zod"

export const CreateAccountUseCaseInput = z.object({
	username: z.string().min(4, "username must have minimum 4 characters"),
	email: z.string().email("invalid email"),
	status: Status.default("PENDING").optional().nullable(),
	password: z.string().optional().nullable(),
	roleId: z.string().optional().nullable(),
	profile: z.object({
		firstName: z.string().min(3, "first name must have minimum 3 characters"),
		lastName: z.string().optional().nullable(),
		picture: z.string().optional().nullable(),
	}),
})

export const CreateAccountUseCaseOutput = User.nullable()

export type CreateAccountUseCaseInput = z.infer<
	typeof CreateAccountUseCaseInput
>
export type CreateAccountUseCaseOutput = z.infer<
	typeof CreateAccountUseCaseOutput
>

export type CreateAccountUseCaseFunction = (
	input: CreateAccountUseCaseInput
) => Promise<CreateAccountUseCaseOutput>

export interface CreateAccountUseCase {
	create: CreateAccountUseCaseFunction
}
