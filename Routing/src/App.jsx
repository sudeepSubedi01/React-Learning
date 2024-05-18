import './App.css'
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Menu from './components/Menu';
import Help from './components/Help';
import User from './components/User';
import HomeNav from './components/HomeNav';
import HelpNav from './components/HelpNav';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Home/> },
    {path:'/contact', element: <Contact/> },
    {path:'/menu', element: <Menu/> },
    {path:'/help', element: <Help/> },
    {path:'/user/helloworld', element: <User/> },
    {path:'/homenav', element: <HomeNav/> },
    {path:'/helpnav', element: <HelpNav/> },
    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
