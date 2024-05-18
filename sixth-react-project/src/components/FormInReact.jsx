import React from 'react'

const FormInReact = () => {
  const handleAddClicked = () =>{
    event.preventDefault()
    console.log(event)
  }
  return (
    <>
    <form onSubmit={()=>handleAddClicked(event)}>
      <input type="text" />
      {/* <input type="date" /> */}
      <button type='submit'>Add</button>

    </form>
    </>
  )
}

export default FormInReact