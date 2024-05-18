import { useState } from "react"
const Counter = () =>{
  const btnStyle = {
    cursor: 'pointer'
  }
  let [count,setCount] = useState(0)
  const handleClick= () =>{
    setCount( count + 1 )
    console.log(count)
  }
  
  return (
    <>
      <button style={btnStyle} onClick={handleClick} >Click to increase count</button>
      <p className="showCount">Count: {count}</p>
    </>
  )
}
export default Counter