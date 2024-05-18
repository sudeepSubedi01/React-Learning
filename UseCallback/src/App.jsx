import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)
  const [adjective, setAdjective] = useState('good')

  // const getAdjective = () =>{
  //   return 'another' + count
  // }

  const getAdjective= useCallback(()=>{ //runs when the value of count is changed
    return 'New count:' + count
  },[count])
  return (
    <>
      <Navbar adjective= {adjective}  getAdjective = {getAdjective} />  {/*function is changed in every rerender */}
      <div>
        <a href="/" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="/" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setNewCount((newCount) => newCount + 1)}>
          new count is {newCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
