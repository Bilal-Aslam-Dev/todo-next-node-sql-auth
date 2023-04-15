import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from './prisma'

export default PrismaAdapter(prisma)
