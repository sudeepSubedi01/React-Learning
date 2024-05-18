import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems:[],
  handleAddClicked: ()=>{},
  handleDeleteClicked: ()=>{}
})   //todoItemsContext is an object
