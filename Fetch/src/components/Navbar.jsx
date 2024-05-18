import React from 'react'
import AddProduct from './AddProduct'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='m-[5px] border flex items-center justify-between'>
      <div className='font-bold text-[25px] hover:underline '><Link to='/' >Ecommerce Website</Link></div>
      <div className="text-[20px] hover:text-[red] cursor-pointer" > <Link to='/addProduct' > Add Product </Link> </div>
    </div>
    </>
  )
}

export default Navbar