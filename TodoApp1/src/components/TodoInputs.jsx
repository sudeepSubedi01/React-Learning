import React from 'react'
import { useRef } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsStore'

const TodoInputs = () => {
  const contextObj = useContext(TodoItemsContext)

//using useRef hook instead of useState
  const inputName1 = useRef()
  const inputDate1 = useRef()

  // console.log('rendering')
  const handleClick = () =>{
    const inputName = inputName1.current.value
    const inputDate = inputDate1.current.value
    if(inputName != '' ){
      contextObj.handleAddClicked(inputName, inputDate)
      inputName1.current.value = ''
      inputDate1.current.value = ''
    }
  }

  return (
    <>
    <div className='mt-5 justify-center flex'>
      <input className="border-black rounded-lg mr-10 ml-5 p-3" type="text" placeholder='Add a task' ref={inputName1} />
      <input className="border-black rounded-lg mr-10 p-3" type="date" ref={inputDate1} />
      <button className='p-3 text-white bg-green-700 rounded-lg' onClick={()=>handleClick()}> <IoAddSharp /> </button>
    </div>
    
    </>
  )
}

export default TodoInputs