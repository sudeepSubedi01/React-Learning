import React, { useContext } from 'react'
import Card from './Card.jsx'
import { contextVar } from '../store/Store.jsx'
import Navbar from './Navbar.jsx'

const DataMap = () => {
  const {productList} = useContext(contextVar)
  
  return (
    <>
      <Navbar/>
      <div className=' border flex gap-[15px] justify-center flex-wrap w-[90%] mx-auto' >
        {
          productList.map((singleData)=>{
            return(
              <Card key={singleData.id} singleData={singleData} />
          )}
          )
        }
      </div>
    </>
  )
}

export default DataMap