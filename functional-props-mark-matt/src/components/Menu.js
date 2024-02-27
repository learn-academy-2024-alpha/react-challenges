import React from 'react'

const Menu = (props) => {
  const { item, price, ordered } =props.item
  const {orderedItems,index } =props
const handleClick = () => {
orderedItems(index)
}

  return (
    <> 
    <div>
      <h4>{item}</h4>
      {/* fooditem */}
      ${price}
      {/* price */}
      </div>
      <div>
    <button onClick={handleClick} id={`btn-${index}`}>Order Item</button>
      {ordered && <h4>🐧🌮</h4>}
      {/* image */}
    </div>
    </>
    )
}

export default Menu
