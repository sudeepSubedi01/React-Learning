import React from 'react'

const ErrorMsg = ({pItem}) => {
  //let foodItems = ['dal', 'rice', 'tea', 'roti', 'salad']
  return (
    <>
    {
      //props.pItem.length === 0 ? <h3>Nothing in the list</h3> : null    //conditional rendering
      pItem.length === 0 ? <h3>Nothing in the list</h3> : null
    }
    </>
  )
}

export default ErrorMsg