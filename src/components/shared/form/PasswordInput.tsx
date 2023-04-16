import { type FC, useState } from 'react'
import { Field, ErrorMessage } from 'formik'

import CustomButton from '../button/CustomButton'

import { EyeIcon, EyeSlash } from '@/assets/icons'

interface IPType {
  inpName: string
  errorName: string
}

const PasswordInput: FC<IPType> = ({ inpName, errorName }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const Icon = isPassword ? EyeIcon : EyeSlash

  return (
    <>
      <div className="relative">
        <Field
          className="block w-full text-gray-800 py-2.5 px-4 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder={`Enter ${inpName}`}
          name={inpName}
          type={isPassword ? 'password' : 'text'}
        />
        <div className="absolute right-3 top-[50%] translate-y-[-50%]">
          <CustomButton>
            <Icon
              onClick={() => {
                setIsPassword(!isPassword)
              }}
              className=" w-5 cursor-pointer stroke-black "
            />
          </CustomButton>
        </div>
      </div>
      <span className="text-red-500 select-none text-xs font-medium">
        <ErrorMessage name={errorName} />
      </span>
    </>
  )
}

export default PasswordInput
