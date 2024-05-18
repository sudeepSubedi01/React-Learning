import { useState,useContext,useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import PostListProvider from '../store/PostListStore'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <>
    <PostListProvider>
      <div className="appContainer">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="appContent">
          <Header/>
          <Outlet/> {/*Renders children of parent <App/> */}
          <Footer/>
        </div>
      </div>
      </PostListProvider>
    </>
  )
}

export default App
