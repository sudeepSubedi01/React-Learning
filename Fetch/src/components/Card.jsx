import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Card = ({singleData}) => {
  return (
    <>
    <div className='mt-[15px] border border-[black] flex flex-col items-center justify-center w-[300px] h-[400px] bg-slate-200' >
      <div className='overflow-hidden'><img src={singleData.productImage} alt="not found" className='w-[100%] h-[100%]' /></div>
      <div className='font-bold p-[8px]'>{singleData.productName}</div>
      <div className='text-justify px-[8px] text-ellipsis' >{singleData.productDescription}</div>
      <div className='my-[7px] '> <Link to={`/showSingleProduct/${singleData.id}`}> <Button btnTxt = 'Read More' /> </Link> </div>
    </div>
    </>
  )
}

export default Card