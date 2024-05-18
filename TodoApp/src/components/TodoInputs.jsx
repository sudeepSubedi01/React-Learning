import React, { useState } from 'react'
import { useRef } from 'react';
import { IoAddSharp } from "react-icons/io5";

const TodoInputs = ({handleAddClicked}) => {

  const[inputName , setInputName] = useState('')
  const[inputDate , setInputDate] = useState('')

  console.log('rerendering')  //page rerenders due to the use of useState hook

  const handleNameChange= ()=> {
    setInputName(event.target.value)
    //console.log(inputName)
  }
  const handleDateChange= ()=> {
    // console.log(event.target.value)
    setInputDate(event.target.value)
    // console.log(inputDate) 
  }

  const handleClick = () =>{
    handleAddClicked(inputName, inputDate)
    setInputName('')
    setInputDate('')
  }

  return (
    <>
    <div className='mt-5 justify-center flex'>
      <input className="border-black rounded-lg mr-10 ml-5 p-3" type="text" placeholder='Add a task' onChange={()=>handleNameChange()} value={inputName} />
      <input className="border-black rounded-lg mr-10 p-3" type="date" onChange={()=>handleDateChange()} value={inputDate} />
      <button className='p-3 text-white bg-black rounded-lg' onClick={()=>handleClick()}> <IoAddSharp /> </button>
    </div>
    
    </>
  )
}

export default TodoInputs