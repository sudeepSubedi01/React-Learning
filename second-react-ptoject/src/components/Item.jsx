import React from 'react'

const Item = ({foodItem}) => { 
  //let {foodItem} = props

  return (
    <>
    <li key={foodItem} >{foodItem}</li>
    </>
  )
}

export default Item