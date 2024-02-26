import React from 'react'

const Order = (props) => {
  return (
    <div>
      <ol>
        {props.orders.map((order, index)=>(
         <li key={index} value={order}>{`${order.item}  ${order.price}`}</li>
        ))}
      </ol>
      </div>
  )
}

export default Order
