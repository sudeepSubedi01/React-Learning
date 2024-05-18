import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from './Button'
import { contextVar } from '../store/Store'

const SingleProduct = () => {
  const {deleteProduct} = useContext(contextVar)
  const [singleData, setSingleData] = useState({})
  const navigate = useNavigate()
  const {id} = useParams()
  const fetchData=async()=>{
    const response = await axios.get('https://65449d865a0b4b04436c99c6.mockapi.io/products/' + id)
    // console.log(response.data)
    setSingleData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleDelete= (e) =>{
    e.preventDefault()
    deleteProduct(singleData.id)
    alert('Deleted successfully')
    navigate('/')
  }
  return (
    <>
    <div className='border-2 border-black h-[100vh] w-[100%] flex items-center justify-center'>
      <div className='border-2 border-[red] mx-auto w-[80%] flex flex-col justify-center items-center'>
        <div>
          <img src={singleData.productImage} alt="image not found" className='h-[200px] rounded' />
        </div>
        <div className='font-bold text-[25px]'>
          {singleData.productName}
        </div>
        <div className='text-center text-wrap'>
          {singleData.productDescription}
        </div>
        <div className='flex gap-[10px] mt-[20px]'>
          <Button btnTxt={'Delete'} handleClickBtn={handleDelete} />
          <Link to={`/updateProduct/${singleData.id}`} ><Button btnTxt={'Update'}/></Link>
          <Link to='/' > <Button btnTxt={'Go back'} /> </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct