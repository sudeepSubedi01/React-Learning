import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { contextVar } from '../context/context'

const Button = () => {
  const {handleClick} = useContext(contextVar)

  return (
    <button onClick={()=>handleClick()} >
      <Component1 />
      <p>This is a button</p>
    </button>
  )
}

export default Button