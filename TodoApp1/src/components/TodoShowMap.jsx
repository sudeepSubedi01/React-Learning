import React from 'react'
import TodoShow from './TodoShow'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsStore'

const TodoShowMap = () => {
  
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <>
    {todoItems.map((item) => (
      <TodoShow key={item.name} item = {item} />
    ))}
    </>
  )
}

export default TodoShowMap