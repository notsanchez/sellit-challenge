import { z } from "zod";

const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;

export const productSchema = z.object({
  id: z.string().refine((val) => ulidRegex.test(val), {
    message: '"id" precisa ser um ULID válido',
  }),
  category_id: z.string().refine((val) => ulidRegex.test(val), {
    message: '"category_id" precisa ser um ULID válido',
  }),
  name: z.string().min(1, '"name" é obrigatório'),
  description: z.string(),
  producer_name: z.string().min(1, '"producer_name" é obrigatório'),
  producer_email: z.string().email('Formato inválido para o campo "email"'),
  cover: z.string().url('Formato de URL inválido para o campo "cover"'),
  thumbnail: z.string().url('Formato de URL inválido para o campo "thumbnail"'),
  price: z.coerce.number().min(0, '"price" precisa ser maior que 0').transform((val) => val.toFixed(2)),
  updated_at: z.string().optional().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: '"updated_at" precisa ser uma data válida',
  }).transform((val) => val ? new Date(val) : new Date()),
  created_at: z.string().optional().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: '"created_at" precisa ser uma data válida',
  }).transform((val) => val ? new Date(val) : new Date()),
});
