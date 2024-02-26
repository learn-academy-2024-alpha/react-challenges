import React from 'react'

const Menu = (props) => {
    console.log(props)
    const { order, price } = props.menu


  return (
    <>
    <h4>{order} ${price}</h4>
    <button>Add Item</button>
    </>
  )
}

export default Menu