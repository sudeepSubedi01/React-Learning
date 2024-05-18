import React, { useEffect } from 'react'

const Navbar = ({val}) => {
  useEffect(()=>{
    console.log('Val changed')
  }, [val])
  useEffect(()=>{
    console.log('from navbar on each re-render')
    return () => {
      console.log('component unmounted')
    }
  },[])
  return (
    <div>This is a navbar in my application</div>
  )
}

export default Navbar