import { PrismaClient } from '../../node_modules/@prisma/client'

let prisma

prisma =
  global.prisma ||
  (prisma = new PrismaClient({
    log: ['query'],
  }))

export default prisma
