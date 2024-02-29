import React from 'react'
import shrek from '../images/shrek.png'

const ShrekBot = () => {
  return (
    <>
    <div className='rob-comp-container'>
        <h3 style={{ color: "#BCF908", fontSize: 23 }}>ShrekBot</h3>
        <img className='invisible' src={shrek} alt="" />
        <div className='text invisible'>GET OUT <br /> OF MY SWAMP!</div>
    </div>
    </>
  )
}

export default ShrekBot