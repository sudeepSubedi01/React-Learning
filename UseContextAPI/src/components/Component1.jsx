import React, { useContext } from 'react'
import { contextVar } from '../context/context'

const Component1 = () => {
  const value1 = useContext(contextVar)

  return (
    <>
    {value1.count}
    </>
  )
}

export default Component1