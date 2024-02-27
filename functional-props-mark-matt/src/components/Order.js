import React from 'react'

const Order = (props) => {
const setTax= .06875
const total = props.orders.reduce((total, value) => total +value.price, 0)
const salesTax = total * setTax
const totalWithTax = total + salesTax
  return (
    <div>
      <ol>
        {props.orders.map((order, index)=>(
         <li key={index} value={order}>{`${order.item}  $${order.price}`}</li>
         
        ))}
      </ol>
      <h4>Total</h4>  
      {total.toFixed(2)}
      <h5>Tax</h5>
      {totalWithTax.toFixed(2)}
      </div>
  )
}

export default Order
