//only A,D,F use the state count

import { useReducer } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import { CountContext } from './store/ContextStore'

const initialState = 0
const reducerFun = (state, action) =>{
  switch(action.type){
    case 'Increment':
      return state + 1
    case 'Decrement':
      return state - 1
    case 'Reset':
      return 0
  }
}
function App() {

  const [count, dispatch] = useReducer(reducerFun, initialState)
  return (
    <>
      <CountContext.Provider value={{count, dispatch}}>
        <center>Count is : {count} </center>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider>

    </>
  )
}

export default App
