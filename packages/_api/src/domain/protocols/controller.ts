import { HttpResponse } from "./http"

export type Controller<Request = any, Response = any, Context = any> = (
	req?: Request,
	context?: Context
) => Promise<HttpResponse<Response>>
