import React from 'react'

const Random = () => {
  let rNumber = Math.random() *100
  return (
    <div>
      <p>A random number is: {rNumber}</p>
    </div>
  )
}

export default Random