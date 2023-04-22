import { type FC, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'

import { useTodos } from '@/hooks/useTodo'

import TodoItem from './todo/TodoItem'
import AddTodo from './todo/AddTodo'

import { ListIcon, Loader, LogoutIcon } from '@/assets/icons'
import CustomButton from '@/components/shared/button/CustomButton'

const HomeScreen: FC = () => {
  const { data: session } = useSession()
  const { todos, loading, fetchTodos } = useTodos()

  console.log(session)

  useEffect(() => {
    if (session?.user != null) {
      fetchTodos()
    }
  }, [session?.user])

  return (
    <>
      <div className="home-gradient px-3 h-screen w-screen flex flex-col items-center">
        <h1 className="text-center text-2xl underline-offset-1 underline font-semibold text-[#b787c7] select-none mb-10 mt-5">
          My Todos.
        </h1>

        <div className="w-full max-w-[500px] rounded-lg relative shadow-xl pt-4 px-3.5 pb-14 bg-white">
            {Boolean(loading) && (
              <Loader className="animate-spin absolute left-5 top-7 -ml-1 h-5 w-5 text-blue-200 mx-auto flex justify-end mr-10" />
            )}
          <div className="w-full flex justify-between items-center pl-10 border-b border-gray-300 pb-3">
            <ListIcon className="w-10 stroke-[#b281c5]" strokeWidth="1.8" />
            <div className="flex gap-1 items-center select-none text-xs">
              Sign Out
              <CustomButton
                onClick={async () => {
                  await signOut()
                }}
              >
                <LogoutIcon
                  className="w-6 h-6 text-red-500 scale-[-1]"
                  strokeWidth="1.8"
                />
              </CustomButton>
            </div>
          </div>
          <div style={{ scrollbarWidth: 'thin' }} className="all-todos mt-7 ">
            {todos?.map((i: Record<string, number & string>) => {
              return (
                <TodoItem
                  status={i?.status ?? 0}
                  text={i?.text}
                  key={i?.id}
                  id={i?.id}
                />
              )
            })}
          </div>
          <div className="absolute right-[50%] translate-x-[50%] -bottom-8">
            <AddTodo />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
