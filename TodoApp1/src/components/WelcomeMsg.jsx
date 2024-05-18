import React from 'react'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsStore'

const WelcomeMsg = () => {
  const todoContextVar = useContext(TodoItemsContext)
  return (
    todoContextVar.length ===0 && <div className='mt-5 mb-0 flex justify-center decoration-solid decoration-black decoration-4'>
      Enjoy your day!!
    </div>
  )
}

export default WelcomeMsg