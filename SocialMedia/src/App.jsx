import { useState,useContext,useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/PostListStore'

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post")

  return (
    <>
    <PostListProvider>
      <div className="appContainer">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="appContent">
          <Header/>
          {selectedTab === 'Home' ? <PostList/> :<CreatePost/>}
          <Footer/>
        </div>
      </div>
      </PostListProvider>
    </>
  )
}

export default App
