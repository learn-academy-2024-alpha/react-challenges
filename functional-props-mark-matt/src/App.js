import React, { useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
import './App.css'


const App = () => {
const [menuItems, setMenuItems] = useState([
  {item: "Little Penguin Taco", price:1.99, ordered: false},
  {item: "King Penguin Burrito", price:8.99, ordered: false},
  {item: "Macaroni Penguin Quesadilla", price:6.99, ordered: false},
  {item: "King Penguin Tortas", price:10.99, ordered: false},
  {item: "Emperor Penguin Nachos", price:12.99, ordered: false},
  {item: "Happy Feet Horchata", price:3.99, ordered: false}
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
    <div className='menu'>
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
    <div className='order'>
      <h2>Order</h2>
      <Order orders={orders}
              price={orders.price}
             />
    </div>
    

    
    
    
    </>
  )
}

export default App
