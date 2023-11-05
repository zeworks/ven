import { HttpResponse } from "../../domain/protocols/http"

export type GraphqlResolver<A = any, C = any, I = any> = (
	_: any,
	args: A,
	context: C,
	info: I
) => Promise<HttpResponse>
