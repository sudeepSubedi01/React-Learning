import React, { createContext, useReducer,useEffect, useState } from 'react'
import axios from 'axios'

// const defaultProductList = [
//   {
//     "createdAt": "2024-05-05T15:39:56.636Z",
//     "productName": "Gorgeous Fresh Towels",
//     "productImage": "https://loremflickr.com/640/480/business",
//     "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     "productMaterial": "Soft",
//     "id": "122"
//   },
//   {
//     "createdAt": "2024-05-05T09:58:34.307Z",
//     "productName": "Incredible Rubber Keyboard",
//     "productImage": "https://loremflickr.com/640/480/business",
//     "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     "productMaterial": "Concrete",
//     "id": "2"
//   },
//   {
//     "createdAt": "2024-05-05T11:07:36.816Z",
//     "productName": "Bespoke Frozen Shoes",
//     "productImage": "https://loremflickr.com/640/480/business",
//     "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     "productMaterial": "Cotton",
//     "id": "3"
//   }]

export const contextVar = createContext({
  productList : [],
  addProduct:()=>{},
  deleteProduct:()=>{},
  updateProduct:()=>{}
})

const reducerFun =(currentProduct, action)=>{
  if(action.type === 'SET_PRODUCT'){
    return action.payload
  }
  if(action.type === 'ADD_PRODUCT'){
    return [...currentProduct, action.payload]
  }
  if(action.type === 'DELETE_PRODUCT'){
    return currentProduct.filter((product)=> product.id != action.payload)
  }
  if(action.type === 'UPDATE_PRODUCT'){
    return [...currentProduct]
  }
}
//-------------------------------------component-------------------------------------------------------
const Store = ({children}) => {
  const [productList,dispatchProductList] = useReducer(reducerFun, [])

  const fetchData =async()=>{
    const response = await axios.get('https://65449d865a0b4b04436c99c6.mockapi.io/products')
    dispatchProductList({type: 'SET_PRODUCT', payload: response.data})
  }
  useEffect(()=>{
    fetchData();
  },[])

  const addProduct=async(newProduct)=>{
    const response = await axios.post('https://65449d865a0b4b04436c99c6.mockapi.io/products/', newProduct)
    dispatchProductList({type:'ADD_PRODUCT' , payload:response.data})
    if(response.status === 201){
      alert("Data posted successfully")
    }
  }
  const deleteProduct=async(deleteId)=>{
    const response = await axios.delete('https://65449d865a0b4b04436c99c6.mockapi.io/products/'+ deleteId)
    if(response.status === 200){
      dispatchProductList({type:'DELETE_PRODUCT', payload: deleteId})
    }
    else{
      console.error(error)
    }
  }
  const updateProduct =async(dataToPost,updateId)=>{
    const response = await axios.put('https://65449d865a0b4b04436c99c6.mockapi.io/products/'+updateId,dataToPost)
    dispatchProductList({type: 'UPDATE_PRODUCT', payload:updateId})
  }
  return (
    <>
    <contextVar.Provider value={{productList,addProduct, deleteProduct,updateProduct}} >{children}</contextVar.Provider>
    </>
  )
}

export default Store