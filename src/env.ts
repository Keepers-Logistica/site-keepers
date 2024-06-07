import { z } from 'zod'

const envSchema = z.object({
  VITE_CMS_API: z.string().url(),
  VITE_CMS_TOKEN: z.string(),
})

export const env = envSchema.parse(import.meta.env)
