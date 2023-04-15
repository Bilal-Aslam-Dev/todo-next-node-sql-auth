import { type NextPage } from 'next'

import withAuthRedirect from '@/components/hoc/withAuthRedirect'

import SignInScreen from '@/components/screens/signin/SignInScreen'

const SignIn: NextPage = () => {
  return <SignInScreen />
}

export default withAuthRedirect(SignIn)
