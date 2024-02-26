import React from 'react'

const Menu = (props) => {
    const { item, price, img} = props.plate
    const { handleOrderAdd, index } = props
    const handleClick = () => {
        handleOrderAdd(index, item, price)
    }
  return (
    <>
    <div>{item}</div>
    <div>{price}</div>
    <img src={img}></img>
    <button onClick={handleClick}>Add to order</button>
    </>
  )
}

export default Menu