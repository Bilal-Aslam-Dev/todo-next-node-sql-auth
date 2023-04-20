import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import sessionCallback from '@/backend/callbacks/next-auth/SessionCallback'
import signInCallback from '@/backend/callbacks/next-auth/signInCallback'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: sessionCallback,
    signIn: signInCallback
  },
  database: process.env.DATABASE_URL,
}

export default NextAuth(options)
