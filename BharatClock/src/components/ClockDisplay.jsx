import React from 'react'

const ClockDisplay = () => {
  let date = new Date() //date is a date object that returns currrnt date and time
  console.log(date)
  console.log(date.toLocaleDateString())
  return (
    <div className='text-2xl'>
      The current time in India is :  {date.toLocaleDateString()} - {date.toLocaleTimeString()}
    </div>
  )
}

export default ClockDisplay