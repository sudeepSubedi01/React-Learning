import React from "react";
import { AiOutlineDelete } from "react-icons/ai";


const TodoShow = ({item, handleDeleteClicked2}) =>{
  // console.log('Inside todoshow')
  const handleClick =()=>{
    handleDeleteClicked2(item.name);
  }
  return(
  <>
  <div className="mt-10 flex justify-center items-center ">
    <span className="w-36 align-center">{item.name}</span>
    <span className="w-36 align-center">{item.dueDate}</span>
    <button className="p-3 ml-5 text-white bg-black rounded-lg" onClick={()=>handleClick()} > <AiOutlineDelete /> </button>
  </div>
  {/* <div className="mt-5 flex justify-center items-center">
  <span className="w-36 align-center">go to college</span>
  <span className="w-36 align-center">2022-02-63</span>
  <button className="p-3 ml-5 text-white bg-black rounded-lg">Delete</button>
  </div> */}
  </>
  )
}

export default TodoShow