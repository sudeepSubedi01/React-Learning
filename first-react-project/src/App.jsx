import React, { useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Count} from './Count'
import Random from './Random'

function App() {
  var name= "hello world"
  const val = 789.366
  let names = () =>{
    return 'jhafjfa alksjfa'
  }
  return (
    <>
      The name is: {names()}
      <p>The value is: {val} </p>
      <Random/>
    </>
  )
}

export default App
