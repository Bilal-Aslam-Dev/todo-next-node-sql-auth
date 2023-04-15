import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// import prismaAdapter from '@/utils/prismaAdapter'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      signinUrl: `${process.env.BASE_URL}/login`,
    }),
  ],
  // adapter: PrismaAdapter,
})
