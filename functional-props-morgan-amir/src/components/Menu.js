import React from 'react'

const Menu = (props) => {
    const { item, price, img} = props.plate
    const { handleOrderAdd, index } = props
    const handleClick = () => {
        handleOrderAdd(index, item, price)
    }
    let dollarFormat = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  return (
    <>
    {index === 0 && <h2>Menu</h2>}
    <div className='menu-cont'>
      <div className='center-text'>{item} <br /> Price: {dollarFormat}</div>
      <img src={img}></img>
      <button onClick={handleClick}>Add to order</button>
    </div>
    </>
  )
}

export default Menu