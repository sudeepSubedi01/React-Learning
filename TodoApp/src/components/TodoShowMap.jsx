import React from 'react'
import TodoShow from './TodoShow'

const TodoShowMap = ({todoItems, handleDeleteClicked1}) => {
  // console.log('Inside todoshowmap')
  // console.log(todoItems)
  return (
    <>
    {todoItems.map((item) => (
      <TodoShow key={item.name} item = {item} handleDeleteClicked2 = {handleDeleteClicked1 } />
    ))}
    </>
  )
}

export default TodoShowMap