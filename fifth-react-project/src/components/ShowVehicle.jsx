import React from 'react'
import ShowVehicleStyle from './ShowVehicle.module.css'

const ShowVehicle = ({vehName,isBought}) => {
  const handleBuyClicked = () =>{
    console.log(`${vehName} is bought`)
  }
  return (
    <>
    <li className={`${ShowVehicleStyle.listItems} ${(isBought) ? (ShowVehicleStyle.active) : null}`}> {vehName} <button className={ShowVehicleStyle.buyBtn} onClick={()=>handleBuyClicked()} >Buy</button> </li>
    </>
  )
}

export default ShowVehicle