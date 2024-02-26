import React, { useState } from 'react'

const Menu = (props) => {
    console.log(props)
    const { order, price } = props.menu

// const handleClick= () => {
//   props.incrementCount()
// }
const [count, setCount] = useState(0);
  
// Function to increment the count
const incrementCount = () => {
  setCount(count + 1);
};
  return (
    <>
    <h4>{order} ${price}</h4>
    <button onClick={incrementCount}>Add Item</button>
    <p>{count}</p>
    </>
  )
}

export default Menu