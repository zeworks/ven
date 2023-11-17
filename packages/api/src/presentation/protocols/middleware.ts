import { Role } from "@/domain/entities/role"
import { HttpResponse } from "./http"

export interface Middleware<T = any> {
	handle: (
		request: T
	) => Promise<HttpResponse<{ accountRole?: Role; accountId?: string } | null>>
}
