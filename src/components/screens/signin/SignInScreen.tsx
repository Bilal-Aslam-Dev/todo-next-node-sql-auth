import type { FC } from 'react'

import GoogleSignIn from './methods/GoogleSignIn'

const SignInScreen: FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center flex-col">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-gray-900 font-bold mb-10">Sign in</h1>
        <GoogleSignIn />
      </div>
    </div>
  )
}

export default SignInScreen
