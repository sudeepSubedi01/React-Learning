import React from 'react'

const LoadingScreen = () => {
  return (
    <>
      <div className="spinnerContainer">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen