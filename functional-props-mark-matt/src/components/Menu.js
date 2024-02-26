import React from 'react'

const Menu = (props) => {
  const { item, price, ordered } =props.menuItems
  return (
    <div>
      <h4>{item}</h4>
      {/* fooditem */}
      {price}
      {/* price */}
      <button {ordered}></button>
      {/* image */}
    </div>
  )
}

export default Menu
