import React from 'react'
import goodrobot from '../images/goodrobot.png'

const GoodRobot = (props) => {
  return (
  <>
  <div className='rob-comp-container'>
    <h3 style={{ color: "#BCF908", fontSize: 23  }}>GoodRobot</h3>
      <img className='invisible' src={goodrobot} alt="" />
      <div className='text invisible'>I hear you saying <br /> "{props.userInput}". Is that correct?</div>
  </div>
  </>
  )
}

export default GoodRobot
