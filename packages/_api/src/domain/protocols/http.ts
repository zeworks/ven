export type HttpResponse<T = any> = {
	statusCode: number
	data: T
}

export enum HttpStatusCode {
	BadRequest = 400,
	Ok = 200,
	NoContent = 204,
	ServerError = 500,
}
