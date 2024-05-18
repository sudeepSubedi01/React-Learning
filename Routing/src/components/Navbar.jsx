import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  // const handleHighlight =()=>{
  //   console.log('called')
  //   return (event.isActive ? 'bg-red':'')
  // }
  
  return (
    <>
    <div className='bg-black text-white'>
      <ul className='flex justify-around	' >
        <Link to="/"><li> Home </li></Link>
        <Link to="/contact"><li> Contact </li></Link>
        <Link to="/menu"><li> Menu </li></Link>
        <Link to="/help"><li> Help </li></Link>
        <Link to="/user/helloworld"><li> User </li></Link>
        <NavLink className={(e)=>{return e.isActive ? 'bg-red-50':''}} to="/homenav"><li> HomeNav </li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? 'bg-red-50':''}} to="/helpnav"><li> HelpNav </li></NavLink>
      </ul>
    </div>
    </>
  )
}

export default Navbar