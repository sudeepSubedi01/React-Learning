import React, { useState, useEffect } from 'react'

const ClockDisplay = () => {
  // console.log('clock rendered')
  let date = new Date() //date is a date object that returns currrnt date and time
  // console.log(date)
  // console.log(date.toLocaleDateString())

  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const intervalId = setInterval (()=>{
      setTime(new Date())
      // console.log('updated')
    }, 1000)

    return()=>{
      clearInterval(intervalId);
      console.log("Interval cancelled")
    }
  },[])
  // console.log('fdkjahd')
  return (
    <center className='text-2xl'>
      The current time in India is :  {time.toLocaleDateString()} - {date.toLocaleTimeString()}
    </center>
  )
}

export default ClockDisplay