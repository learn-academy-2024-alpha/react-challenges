import React, { useState } from 'react'
import Menu from './Components/Menu'
import Counter from './Components/Counter'


const App = () => {

  const [menuItems, setMenuItems] = useState([
    { order: "Brisket Plate", price: 12, },
    { order: "Ribs Platter", price: 14 },
    { order: "Pulled Pork Sandwhich", price: 10 },
    { order: "Beef Ribs Plate", price: 14 },
    { order: "Fries", price: 8 },
    { order: "Loaded Fries", price: 13 },
    { order: "Daddy Plate", price: 25 },
    { order: "Bbq chicken plate", price: 14 },
    { order: "Meat Tacos", price: 9 },
    { order: "Burrito", price: 12 },

  ])

  return (
    <>
      <h1>React BBQ</h1>
      {menuItems.map((menu, index) => {
        return (
          <Menu menu={menu} key={index}  />
          
        )
      })}
    </>
  )
}

export default App
