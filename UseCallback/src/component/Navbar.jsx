import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  console.log('Navbar rendered')
  return (
    <>
    <div>This is a {adjective} navbar</div>
    <div>Count changed to : {getAdjective()}</div>
    </>
  )
}

export default memo(Navbar)

//due to memo, this component is only rendered when the props are changed