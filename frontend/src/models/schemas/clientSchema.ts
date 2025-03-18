import { z } from "zod"

export const clientSchema = z.object({
    name: z.string({
        required_error: "Você precisa digitar um nome"
    }),
    wage: z.string({
        required_error: "Você precisa digitar o salário"
    }),
    enterprise: z.string({
        required_error: "Você precisa digitar o valor da empresa"
    })
})