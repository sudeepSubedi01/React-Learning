import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsStore'

const TodoShow = ({item}) =>{
  const contextObj = useContext(TodoItemsContext)
  const handleClick =()=>{
    contextObj.handleDeleteClicked(item.name);
  }
  return(
  <>
  <div className="mt-10 flex justify-center items-center ">
    <span className="w-36 align-center break-words ">{item.name}</span>
    <span className="w-36 align-center">{item.dueDate}</span>
    <button className="p-3 ml-5 text-white bg-red-700 rounded-lg" onClick={()=>handleClick()} > <AiOutlineDelete /> </button>
  </div> 
  </>
  )
}

export default TodoShow