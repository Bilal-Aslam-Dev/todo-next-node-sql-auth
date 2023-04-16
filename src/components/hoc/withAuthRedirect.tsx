import type { FC } from 'react'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { SplashLoader } from '../shared'

const withAuthRedirect = (WrappedComponent: FC): any => {
  const HOCComponent: FC = props => {
    const router = useRouter()
    const { data: session, status } = useSession()

    if (status !== 'loading' && session != null) {
      void router.push('/')
      return null
    }

    if (session === null) {
      return <WrappedComponent {...props} />
    }

    return <SplashLoader />
  }

  return HOCComponent
}

export default withAuthRedirect
