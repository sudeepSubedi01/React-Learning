import { useState } from 'react'

import './App.css'
import { useMemo } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const slowFunction =(num)=>{
    console.log('slow function called')
    for(let i=0;i<=100000000; i++){
      return num ** 2
    }
  }
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number])

  const handleChange=()=>{
    setNumber(parseInt(event.target.value))
  }
  return (
    <>
      Number: <input type="number" value={number} onChange={()=>handleChange()}/> <br />
      Double Number: <input type="number" value={doubleNumber} readOnly/>
    </>
  )
}

export default App
