import { deleteTodo } from '@/backend/services/todos/deleteTodo'

export const deleteTodoController = async (_req, _res) => {
  console.log(_req.body)
  try {
    return await deleteTodo(_req, _res)
  } catch (error) {
    _res.status(501).send('Could not delete todo')
  }
}
