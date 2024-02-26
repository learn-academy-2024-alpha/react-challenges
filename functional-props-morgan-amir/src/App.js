import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Order from './components/Order';
import miniTacos from './img/mini-tacos.jpeg';
import enchiladas from './img/enchiladas.jpeg';
import nachos from './img/nachos.jpeg';
import quesadilla from './img/quesadilla.jpeg';
import taquitos from './img/taquito.jpeg';


const App = () => {
  const [showMenu, setShowMenu] = useState([
    { item: "Quesadilla", price: 13, img: quesadilla },
    { item: "Enchiladas", price: 15, img: enchiladas},
    { item: "Mini Tacos", price: 50, img: miniTacos},
    { item: "Taquitos", price: 20, img: taquitos},
    { item: "Nachos", price: 12, img: nachos},
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
