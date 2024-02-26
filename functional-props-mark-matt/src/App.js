import React from 'react'
import Menu from './components/Menu'
import Order from './components/Order'


const App = () => {
const [menuItems, setMenuItems] = [
  {item: "Penguin Taco", price:"$1.99", ordered: false},
  {item: "King Penguin Burrito", price:"$8.99", ordered: false},
  {item: "Penguin Quesadilla", price:"$6.99", ordered: false},
  {item: "Penguin Tortas", price:"$10.99", ordered: false},
  {item: "Penguin Nachos", price:"$12.99", ordered: false},
  {item: "Happy Feet Horchata", price:"$3.99", ordered: false}
]






  return (
    <>
    <div>
      <h1>Welcome To Taquiera Pingüina</h1>
      <h2>Menu</h2>
     {menuItems.map((item, index)=> {
      return(
        <Menu item={item} 
              key={index} 
              index={index} />
     )})}
    </div>
    <div>
      <h2>Order</h2>
    </div>
    

    
    
    
    </>
  )
}

export default App
