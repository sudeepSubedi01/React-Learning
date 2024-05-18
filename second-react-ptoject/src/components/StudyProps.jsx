import React from "react"
import PropTypes from 'prop-types'


const StudyProps = ( props ) => {
  const myStyle = {     //css in react style
    border: '1px solid white',
    padding: '10px',
    lineHeight: '15%',
    marginBottom : '15px'
  }

  StudyProps.PropTypes = {    //proptypes
    name : PropTypes.string,
    age : PropTypes.number,
    id : PropTypes.number,
    isStudent: PropTypes.bool
  }

  StudyProps.defaultProps = {
    name : 'Guest',
    age: 0,
    id: 0,
    isStudent : false
  }
  
  return(
    <>
      <div style={myStyle}>   {/*Using props*/}
        <p>ID : {props.id}</p>
        <p>Name : {props.name} </p>
        <p>Is a student : {props.isStudent ? "yes" : "no"} </p>
        <p>Age : {props.age} </p>
      </div>
    </>
  )
}

export default StudyProps