import type { FC } from 'react'

import { CommonInput, PasswordInput, FormikWrapper } from '@/components/shared'
import { loginSchema } from '@/utils/ValidationSchemas'
import CustomButton from '@/components/shared/button/CustomButton'

const SignInForm: FC = () => {
  const handleSubmit = (values: any): any => {
    console.log(values)
  }

  return (
    <>
      <FormikWrapper
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <CommonInput inpName="email" type="email" errorName="email" />
        </div>

        <div className="mt-3">
          <label htmlFor="password">Password</label>
          <PasswordInput inpName="password" errorName="password" />
        </div>
        <CustomButton
          className="mb-3 w-full py-3 text-sm capitalize font-medium tracking-wide hover:bg-blue-400 hover:bg-opacity-80 bg-blue-400 text-white rounded-lg mt-5"
          type="submit"
        >
          Sign in
        </CustomButton>
      </FormikWrapper>
    </>
  )
}

export default SignInForm
