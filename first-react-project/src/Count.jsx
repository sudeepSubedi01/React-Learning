import React, { useState } from 'react'

const Count = () => {
  let count = 0
  useState [count, setCount] = useState(0)
  const incCount = () =>{
    setCount(count+1)
  }
  return (
    <>
    <button onClick={incCount}>Click to add</button>
    <p>The count is: {count}</p>
    </>
  )
}

export default Count