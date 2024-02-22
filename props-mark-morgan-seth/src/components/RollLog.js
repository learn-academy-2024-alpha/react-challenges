import React from 'react'

const RollLog = (props) => {
console.log(props)

  return (
    <>
        <div>RollLog</div>
        <p>{props.currentRoll}</p>
    </>
  )
}

export default RollLog