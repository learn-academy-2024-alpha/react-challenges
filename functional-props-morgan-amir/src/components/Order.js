import React from 'react'

const Order = (props) => {
    const { orderAdd } = props // arr of indexes. each index holds food obj
    console.log(orderAdd)
    let acc = 0
    let accTax = 0
  return (
    <>
    {orderAdd.map((foodObj, index) => {
        return (
            <>
            <div key={index}>{foodObj.item} {foodObj.price}</div>
            {acc += foodObj.price}
            {accTax += ((foodObj.price * .0725) + foodObj.price)}
            </>
        )
    })}
    <div>
      <p>Total cost {acc}</p>
      <p>Total with tax {accTax.toFixed(2)}</p>
    </div>
    </>
  )
}

export default Order