import * as bcrypt from "bcrypt"

export const hash = async (value: string, rounds: number) =>
	bcrypt.hash(value, rounds)

export const hashCompare = async (value: string, hash: string) =>
	bcrypt.compare(value, hash)
