import { PrismaClient } from '../src/generated/prisma/index.js'
import { neon } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

const sql = neon(process.env.DATABASE_URL)
const adapter = new PrismaNeon(sql)

const prisma = globalThis.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export default prisma