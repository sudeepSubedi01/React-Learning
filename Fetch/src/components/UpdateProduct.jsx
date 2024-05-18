import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contextVar } from '../store/Store'
import Navbar from './Navbar.jsx'
import Button from './Button.jsx'

const UpdateProduct = () => {
  const [data,setData] = useState({})
  const navigate = useNavigate()
  const {updateProduct} = useContext(contextVar)
  const {id} = useParams()
  const fetchData = async() =>{
    const response = await axios.get(`https://65449d865a0b4b04436c99c6.mockapi.io/products/${id}`)
    console.log(response.data)
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleUpdateSubmit =(e) =>{
    e.preventDefault()
    updateProduct(data,id)
    alert('Data Updated')
    navigate('/showSingleProduct/'+id)
  }
  const handleChange =(e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name] : value
    })
  }

  return (
    <>
    <Navbar/>
    <div className='w-[80%] mx-auto flex flex-col border-[2px] border-[red] justify-center items-center'>
      <div className='font-bold text-[30px]'>
        Update Product
      </div>
      <div >
        <form onSubmit={handleUpdateSubmit} className='flex flex-col gap-[10px]'>
          <label htmlFor="productImage">Product Image:</label>
          <input type="text" id='productImage' name='productImage' value={data.productImage} onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] w-[300px]' />
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id='productName' name='productName' value={data.productName} onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] ' />
          <label htmlFor="productDescription">Product Description:</label>
          <input type="text" id='productDescription' name='productDescription' value={data.productDescription} onChange={handleChange} className='border-[2px] border-[black] rounded px-[2px] py-[5px] ' />
          <Button btnTxt={'Update'}/>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateProduct