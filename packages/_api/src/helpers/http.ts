import { HttpResponse, HttpStatusCode } from "../domain/protocols/http"

export const ok = (data: any): HttpResponse => ({
	statusCode: HttpStatusCode.Ok,
	data,
})

export const badRequest = (error: Error): HttpResponse => ({
	statusCode: HttpStatusCode.BadRequest,
	data: error,
})

export const noContent = (): HttpResponse => ({
	data: null,
	statusCode: HttpStatusCode.NoContent,
})

export const serverError = (error: any): HttpResponse => ({
	data: error,
	statusCode: HttpStatusCode.ServerError,
})
