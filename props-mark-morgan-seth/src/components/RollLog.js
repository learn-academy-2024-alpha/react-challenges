import React from 'react'

const RollLog = (props) => {
console.log(props)

  return (
    <>
    <div className='roll-log-parent'>
        <div className='roll-title'>RollLog</div>
        <ul className='num-parent'>
            {props.currentRoll.map(num => {
                return <li>{num}</li>
            })}
        </ul>
    </div>
    </>
  )
}

export default RollLog