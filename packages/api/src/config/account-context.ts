import { Role } from "@/domain/entities/role"

export type AccountContext = {
	accountId: string
	accountRole?: Role
}
