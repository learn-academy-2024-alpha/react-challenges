import React from 'react'

const BadRobot = (props) => {
  const bla = "BLA"
  const length = props.userInput.length
  const tooManyBlas = bla.repeat(Math.ceil(length / 3))
  const slicedOffBlas = tooManyBlas.slice(0, length)
  return (
  <>
    <h3>BadRobot</h3>
    <div>All i heard was {slicedOffBlas}. You sure???</div>
  </>
  )
}

export default BadRobot