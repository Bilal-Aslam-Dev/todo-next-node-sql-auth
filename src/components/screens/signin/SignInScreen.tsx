import type { FC } from 'react'

import GoogleSignIn from './methods/GoogleSignIn'
import SignInForm from './methods/SigninForm'

const SignInScreen: FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 px-3 sm:px-0 flex justify-center items-center flex-col py-10">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 pb-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-gray-900 font-bold mb-10 pt-5">Sign in</h1>
        {/* CUSTOM SIGNIN */}
        <SignInForm />
        {/* GOOGLE SIGNIN */}
        <GoogleSignIn />
      </div>
    </div>
  )
}

export default SignInScreen
