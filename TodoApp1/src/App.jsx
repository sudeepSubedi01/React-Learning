import TodoHeading from './components/TodoHeading'
import TodoInputs from './components/TodoInputs'
import TodoShowMap from './components/TodoShowMap'
import './App.css'
import { useReducer, useState } from 'react'
import WelcomeMsg from './components/WelcomeMsg'
import { TodoItemsContext } from './store/TodoItemsStore'

const reducerFun = (currentTodoItems, action) =>{
  let newTodoItems = currentTodoItems
  if( action.type === 'NEW_ITEM'){
    newTodoItems = [...currentTodoItems , {name: action.payload.newName, dueDate:action.payload.newDuedate }]
  }
  if( action.type === 'DELETE_ITEM'){
    newTodoItems=  currentTodoItems.filter((item)=>item.name !== action.payload.deleteItemName) 
  }
  return newTodoItems
}

function App() {

  const [todoItems, dispatchTodoItems ] = useReducer(reducerFun , [])

  const handleAddClicked = (newName, newDuedate) =>{
    const newItemAction ={ 
      type: 'NEW_ITEM',
      payload:{ newName, newDuedate} }
    dispatchTodoItems(newItemAction)
  }

  const handleDeleteClicked = (deleteItemName) => {
    const deleteItemAction ={ 
      type: 'DELETE_ITEM',
      payload:{ deleteItemName} }
    dispatchTodoItems(deleteItemAction)
  }

  return (
    <>
    <TodoItemsContext.Provider value={{todoItems,handleAddClicked,handleDeleteClicked}}>
      <TodoHeading/>
      <TodoInputs />
      <WelcomeMsg/>
      <TodoShowMap />
    </TodoItemsContext.Provider>
    </>
  )
}

export default App