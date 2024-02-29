import React from 'react'
import badRobot from '../images/badrobot.png'

const BadRobot = (props) => {
  const bla = "BLA"
  const length = props.userInput.length
  const tooManyBlas = bla.repeat(length)
  const sliceOffBlas = tooManyBlas.slice(0, length)
  return (
  <>
  <div className='rob-comp-container'>
    <h3 style={{ color: "#BCF908", fontSize: 23 }}>BadRobot</h3>
      <img className='invisible' src={badRobot} alt="" />
      <div className='text invisible'>All I heard was <br />  {sliceOffBlas}. You sure???</div>
  </div>
  </>
  )
}

export default BadRobot