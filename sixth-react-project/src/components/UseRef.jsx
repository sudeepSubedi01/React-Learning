import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const [name,setName] = useState('')
  const rendercount = useRef(0)
  const handleChange = () => {
    rendercount.current++
    setName(event.target.value)
    console.log(rendercount.current)
  }

  useEffect(()=>{
    console.log('rerendering')
  })
  return (
    <>
    <input type="text" onChange={()=>handleChange(event)} />
    <div>The name is: {name}</div>
    </>
  )
}

export default UseRef