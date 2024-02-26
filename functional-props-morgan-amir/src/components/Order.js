import React from 'react'

const Order = (props) => {
    const { orderAdd } = props // arr of indexes. each index holds food obj
    console.log(orderAdd)
  return (
    <>
    {orderAdd.map((foodObj, index) => {
        return (
            <>
            <div key={index}>{foodObj.item} {foodObj.price}</div>
            </>
        )
    })}
    </>
  )
}

export default Order