import React from 'react'

const Dice = (props) => {

  return (
    <>
        <button onClick={props.handleDiceClick}>Roll Dice</button>
    </>
  )
}

export default Dice