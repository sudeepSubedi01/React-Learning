import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const User = () => {
  const params =useParams()
  return (
    <>
    <Navbar/>
    <div>Welcome to the site as {params.username} </div>
    
    </>
  )
}

export default User