import { useState } from "react"

const FoodInput = () => {
  let [var1, setVar1] =  useState("")
  const handleChange =()=>{
    setVar1( event.target.value)
    document.querySelector('.updateLive').innerText = var1
    //console.log(var1)
  }
  return(
    <>
    <input type="text" placeholder="Enter a food name" onChange={handleChange} />
    <p className="updateLive" ></p>
    </>
  )
}
export default FoodInput