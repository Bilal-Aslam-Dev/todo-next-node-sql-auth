import prisma from '@/utils/prisma'

export default async function sessionCallback({ session }) {
  const { email, name, image } = session.user

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {

    // Sets userId to the session including default session data
    session.user = { user: { ...session.user }, userId: existingUser.id }

  } else {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        profileImage: image,
      },
    })

    // Sets userId to the session including default session data
    session.user = { user: { ...session.user }, userId: newUser.id }

  }

  return session
}
