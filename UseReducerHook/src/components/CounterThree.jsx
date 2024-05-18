import React,{useReducer} from 'react'


const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducerFun = (state, action) =>{
  switch(action.type){
    case 'Increment':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'Decrement':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'Reset':
      return {...state,firstCounter: 0}
    case 'Increment2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'Decrement2':
      return {...state,secondCounter: state.secondCounter - action.value}
    case 'Reset2':
      return {...state,secondCounter: 10}
  }
}

const CounterThree = () => {
  const [state,dispatch] = useReducer(reducerFun, initialState)
  const [state2,dispatch2] = useReducer(reducerFun, initialState)
  return (
    <>
      <div className='m-10 flex flex-col items-center'>
        <span className='m-2'>{state.firstCounter}</span>
        <div className="flex">
          <button className='p-2 w-16 border-2 border-black-600 bg-green-500 rounded' onClick={()=>dispatch({type: 'Increment', value:1})}>+1</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-red-500 rounded' onClick={()=>dispatch({type: 'Decrement', value:1})}>-1</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-orange-500 rounded' onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
        </div>
        <span className='m-2'>{state2.secondCounter}</span>
        <div className="flex">
          <button className='p-2 w-16 border-2 border-black-600 bg-green-500 rounded' onClick={()=>dispatch2({type: 'Increment2', value:5})}>+5</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-red-500 rounded' onClick={()=>dispatch2({type: 'Decrement2', value:5})}>-5</button>
          <button className='p-2 w-16 border-2 border-black-600 bg-orange-500 rounded' onClick={()=>dispatch2({type: 'Reset2'})}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default CounterThree