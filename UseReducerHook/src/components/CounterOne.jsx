import React,{useReducer} from 'react'


// const initialState = 5
const reducerFun = (state, action) =>{ //reducer function
  console.log(state)
  console.log(action)
  console.log(action.hello)
  console.log('dispatch calling reducer function')
  // console.log(action.hello)
  if(action.type === 'Increment'){
    return state +1
  }
  if(action.type === 'Decrement'){
    return state +1
  }
  if(action.type === 'Reset'){
      return 0
  }
}

const CounterOne = () => {
  const [state,dispatch] = useReducer(reducerFun, 0)  //initialization
  return (
    <>
      <div className='m-10'>
        <button className='p-2 border-2 border-black-600 bg-red-500 rounded' onClick={()=>dispatch({type: 'Decrement'})}>-</button>
        <span className='m-2'>{state}</span>
        <button className='p-2 border-2 border-black-600 bg-green-500 rounded' onClick={()=>dispatch({type: 'Increment'})}>+</button>
        <br /> <br /><br />
        <button className='p-2 border-2 border-black-600 bg-orange-500 rounded' onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
      </div>
    </>
  )
}

export default CounterOne