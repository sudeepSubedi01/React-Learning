import React from 'react'

const Button = ({btnTxt, handleClickBtn}) => {
  return (
    <div>
      <button className='bg-[blue] text-white rounded p-[5px] hover:bg-[violet]' onClick={ handleClickBtn? handleClickBtn : null }>{btnTxt}</button>
    </div>
  )
}

export default Button