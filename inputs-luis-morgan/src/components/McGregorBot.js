import React from 'react'
import mcgregor from '../images/mcgregor.png'

const McGregorBot = (props) => {
  return (
    <>
    <div className='rob-comp-container'>
      <h3 style={{ color: "#BCF908", fontSize: 23  }}>McGregorBot</h3>
      <img className='invisible' src={mcgregor} alt="" />
      <div className='text invisible'>Who da F#$%^ <br /> is {props.userInput}?????</div>
    </div>
    </>
  )
}

export default McGregorBot