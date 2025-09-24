import { z } from 'zod'
import { insertProductSchema } from '../lib/validators'

// Type for inserting products
export type Product = z.infer<typeof insertProductSchema> & {
  id: string
  rating: string // Decimal from Prisma becomes string when serialized
  createdAt: Date
}
