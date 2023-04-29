import { z } from "zod"
import { Base } from "./base"

export const FieldType = z.enum(["string", "text", "boolean", "date"])

export const FieldStyle = z.enum([
	"singleLine",
	"multiLine",
	"markdown",
	"slug",
	"richText",
	"number",
	"date",
	"dateTime",
	"boolean",
])

export const FieldOptions = z.object({
	localized: z.boolean().optional().default(false),
})

export const FieldValidation = z.object({})

// export const FieldTypeString = z.object({
// 	type: z.literal("string"),
// 	style: z.nativeEnum(Enum),
// 	options: FieldOptions,
// 	validations: z.intersection(
// 		FieldValidation,
// 		z.object({
// 			required: z.boolean().optional().default(false),
// 			unique: z.boolean().optional().default(false),
// 			pattern: z.string().optional(),
// 		})
// 	),
// })

// export const FieldTypeBoolean = z.object({
// 	type: z.literal("boolean"),
// 	style: z.enum(["boolean"]),
// })

export const Field = z.intersection(
	Base,
	z.object({
		name: z.string(),
		key: z.string(),
		type: FieldType,
		style: FieldStyle,
		description: z.string().optional().nullable(),
		options: FieldOptions.optional(),
		validations: FieldValidation.optional(),
	})
)

export const Model = z.intersection(
	Base,
	z.object({
		name: z.string(),
		fields: Field.optional(),
	})
)

export type Model = z.TypeOf<typeof Model>

export type Field = z.TypeOf<typeof Field>
export type FieldOptions = z.TypeOf<typeof FieldOptions>
export type FieldValidation = z.TypeOf<typeof FieldValidation>
export type FieldType = z.TypeOf<typeof FieldType>
export type FieldStyle = z.TypeOf<typeof FieldStyle>
// export type FieldTypeString = z.TypeOf<FieldTypeString>
// export type FieldTypeBoolean = z.TypeOf<typeof FieldTypeBoolean>
