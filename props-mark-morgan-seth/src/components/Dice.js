import React from 'react'

const Dice = (props) => {

  return (
    <>
    <div>
        <div>
            <button onClick={props.handleDiceClick}>Roll Dice</button>
        </div>
        <div>
        <   img className='dice-img' src={props.diceImage} alt="" />
        </div>
    </div>
    </>
  )
}

export default Dice