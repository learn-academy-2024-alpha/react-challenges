import React, { useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'


const App = () => {
const [menuItems, setMenuItems] = useState([
  {item: "Penguin Taco", price:"$1.99", ordered: false},
  {item: "King Penguin Burrito", price:"$8.99", ordered: false},
  {item: "Penguin Quesadilla", price:"$6.99", ordered: false},
  {item: "Penguin Tortas", price:"$10.99", ordered: false},
  {item: "Penguin Nachos", price:"$12.99", ordered: false},
  {item: "Happy Feet Horchata", price:"$3.99", ordered: false}
])
const [orders, setOrders] = useState([])

const orderedItems = (orderedItemIndex) => {
  menuItems[orderedItemIndex].ordered = true
  setMenuItems([...menuItems])
  document.getElementById(`btn-${orderedItemIndex}`).style.display="none"
  setOrders([...orders, menuItems[orderedItemIndex] ]) 
}


console.log(orders);




  return (
    <>
    <div>
      <h1>Welcome To Taquiera Pingüina</h1>
      <h2>Menu</h2>
     {menuItems.map((item, index)=> {
      return(
        <Menu item={item} 
              key={index} 
              index={index} 
              orderedItems={orderedItems}
              />
     )})}
    </div>
    <div>
      <h2>Order</h2>
      <Order orders={orders}
             />
    </div>
    

    
    
    
    </>
  )
}

export default App
