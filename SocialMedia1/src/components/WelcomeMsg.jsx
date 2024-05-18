import React from 'react'

const WelcomeMsg = ({handleGetPostsClick}) => {
  const myStyle ={
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <>
    <div className="welcomeContainer" style={myStyle} >
      <h1>No posts to show!!</h1>
      <button className='btn btn-primary' onClick={()=>handleGetPostsClick()}> Click to load from server</button>
    </div>
    </>
  )
}

export default WelcomeMsg