import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const withAuth = WrappedComponent => {
  const HOCComponent = props => {
    const router = useRouter()
    const { data: session, status } = useSession()

    if (status !== 'loading' && !session) {
      router.push('/api/auth/signin')
      return null
    }

    if (session) {
      return <WrappedComponent {...props} />
    }

    return <div>Loading....</div>
  }

  return HOCComponent
}

export default withAuth
