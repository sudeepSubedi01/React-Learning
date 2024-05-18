import TodoHeading from './components/TodoHeading'
import TodoInputs from './components/TodoInputs'
import TodoShowMap from './components/TodoShowMap'
import './App.css'
import { useState } from 'react'
import WelcomeMsg from './components/WelcomeMsg'


function App() {

  // const initialTodoItems = [
  //   {
  //     name: 'go to college',
  //     dueDate : '2023-05-02'
  //   },
  //   {
  //     name: 'go to gym',
  //     dueDate : '2026-05-02'
  //   }
  // ]

  const [todoItems, setTodoItems] = useState([])

  const handleAddClicked = (newName, newDuedate) =>{
    // console.log(newName)
    // console.log(newDuedate)
    // console.log(todoItems)
    const tempItem = [...todoItems ,{name: newName , dueDate: newDuedate} ]
    setTodoItems(tempItem)
    console.log(tempItem)
  }
  const handleDeleteClicked = (deleteItemName) => {
    // console.log('handleDeleteClicked Invoked')
    // console.log(deleteItemName)
    const tempItem1 = todoItems.filter(item1 => item1.name != deleteItemName)
    setTodoItems(tempItem1)
  }
  return (
    <>
    <TodoHeading/>
    <TodoInputs handleAddClicked = {handleAddClicked} />
    {todoItems.length != 0 ? <WelcomeMsg/> : null}
    <TodoShowMap todoItems = {todoItems} handleDeleteClicked1 = { handleDeleteClicked } />
    </>
  )
}

export default App