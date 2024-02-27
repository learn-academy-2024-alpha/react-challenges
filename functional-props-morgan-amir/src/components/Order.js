import React from 'react'

const Order = (props) => {
    const { foodObj, calcTotal, index, handleDelete } = props // arr of indexes. each index holds food obj
    let total = calcTotal()
    const handleClick = () => {
      handleDelete(index)
    }
  return (
    <>
      <div className='food-on-order'>
        <div>{props.foodObj.item} {props.foodObj.price}</div>
      </div>
      <div className='food-on-order'>
        <button onClick={handleClick}>Delete</button>
      </div>
      {/* <div className='food-on-order'>
        <p>Total: {total}</p>
    </div> */}
    </> 
  )
}

export default Order