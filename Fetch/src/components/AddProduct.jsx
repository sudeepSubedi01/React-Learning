import React, { useContext, useState } from 'react'
import Button from './Button'
import Navbar from './Navbar'
import { contextVar } from '../store/Store'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const {addProduct} = useContext(contextVar)
  const [data,setData] = useState({
    productImage : '',
    productName: '',
    productDescription: ''
  })

  const handleChange = (e) =>{
    const {name,value} = e.target
    setData({
      ...data,
      [name] : value
    })
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    addProduct(data)
    navigate('/')
  }
  return (
    <>
    <Navbar/>
    <div className='w-[80%] mx-auto flex flex-col border-[2px] border-[red] justify-center items-center'>
      <div className='font-bold text-[30px]'>
        Add a New Product
      </div>
      <div >
        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
          <label htmlFor="productImage">Product Image:</label>
          <input type="text" id='productImage' name='productImage' onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] w-[300px]' />
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id='productName' name='productName' onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] ' />
          <label htmlFor="productDescription">Product Description:</label>
          <input type="text" id='productDescription' name='productDescription' onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] ' />
          <Button btnTxt={'Submit'}/>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddProduct