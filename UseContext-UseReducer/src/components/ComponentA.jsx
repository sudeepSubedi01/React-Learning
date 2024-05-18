import React, { useContext } from 'react'
import { CountContext } from '../store/ContextStore'

const ComponentA = () => {
  const val = useContext(CountContext)
  return (
    <>
    <div className='m-10 flex flex-col items-center'>
        <span>ComponentA - { val.count }</span>
        <div className="flex">
          <button className='p-2 w-16 border-2 border-black-600 bg-green-500 rounded' onClick={()=>val.dispatch({type: 'Increment'})}>+1</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-red-500 rounded' onClick={()=>val.dispatch({type: 'Decrement'})}>-1</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-orange-500 rounded' onClick={()=>val.dispatch({type: 'Reset'})}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default ComponentA