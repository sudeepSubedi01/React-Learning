import Buttons from "./components/Buttons"
import InputField from "./components/InputField"
import { useState } from "react"

function App() {
  const [val, setVal] = useState('')
  const handleClick = (mem) =>{
    // console.log('clicked')
    // console.log(event)
    // console.log(event.target.innerText)
    // console.log(mem)
    if (mem === 'C'){
      setVal('')
    }else if(mem === '=') {
      const result = eval(val)
      setVal(result)
    }else{
      const displayVal = val + mem
      setVal(displayVal)
      console.log(displayVal)
    }
  }
  return (
    <>
      <div className='calculator mt-5 ml-5 w-80 bg-indigo-100  border-2 border-amber-700 rounded flex flex-col justify-items-center'  >
        <InputField val = {val} />
        <Buttons handleClick = {handleClick} />    
      </div>

    </>
  )
}

export default App
