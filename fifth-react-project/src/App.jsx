//was trying to make the list item to another color when buyBtn was clicked

import { useState } from "react"
import Counter from "./components/Counter"
import VehicleMap from "./components/VehicleMap"

function App() {
  //using useState
  // let textState = useState("Food item entered by the user")
  // let textToShow = textState[0]
  // let setTextToShow = textState[1]
  // //console.log(textToShow)
  // console.log(textState)

  const handleChange = () =>{
    if(event.key === 'Enter' && event.target.value != ''){
        console.log(event.target.value)
        let tempVar = [...vehName,event.target.value]
        setVehName(tempVar)
        event.target.value = ''
    }
  }

  let [vehName, setVehName] = useState(['car','van','jeep','truck'])
  return(
    <>
    {/* <Counter/> */}
    <VehicleMap vehName = {vehName} handleChangeP = {()=>handleChange()}/>
    </>
  )
}

export default App  
