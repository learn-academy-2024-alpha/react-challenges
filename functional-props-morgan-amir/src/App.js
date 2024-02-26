import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Order from './components/Order';

const App = () => {
  const [showMenu, setShowMenu] = useState([
    { item: "Quesadilla", price: "$13.00" },
    { item: "Enchiladas", price: "$15.00" },
    { item: "Mini Tacos", price: "$50.00" },
    { item: "Taquitos", price: "$20.00" },
    { item: "Nachos", price: "$12.00" },
  ])

  const [orderAdd, setOrderAdd] = useState([])

  const handleOrderAdd = (index, item, price) => {
    const plateObj = showMenu[index]
    orderAdd.push(plateObj)
    setOrderAdd([...orderAdd])
  }

  return (
    <>
    <div className='main-container'>
      {showMenu.map((plate, index) => {
        return <Menu plate={plate} key={index} index={index} handleOrderAdd={handleOrderAdd} />
      })}
      <Order orderAdd={orderAdd} />
    </div>
    </>
  )
}

export default App;
