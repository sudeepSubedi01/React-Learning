import React, { useState } from 'react'
import ShowVehicle from './ShowVehicle'
import VehicleMapStyle from './VehicleMap.module.css'

const VehicleMap = ({vehName, handleChangeP}) => {

  let [activeItems,setActiveItems] = useState([])
  return (
    <>
    <div className={VehicleMapStyle.container}>
      <div className={VehicleMapStyle.heading}>
        <h1 >Vehicles Names</h1>
      </div>

      <div className={VehicleMapStyle.inputField}>
        <input type="text" placeholder='Enter a vehicle name' onKeyDown={()=> handleChangeP()}/>
      </div>

      <div className={VehicleMapStyle.listItems}>
        <ul>
          {vehName.map((vehName)=>{
            return <ShowVehicle vehName = {vehName} isBought = { activeItems.includes(vehName) } />
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default VehicleMap