import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Order from './components/Order';
import miniTacos from './img/mini-tacos.jpeg';
import enchiladas from './img/enchiladas.jpeg';
import nachos from './img/nachos.jpeg';
import quesadilla from './img/quesadilla.jpeg';
import taquitos from './img/taquito.jpeg';
import Header from './components/Header';


const App = () => {
  const [showMenu, setShowMenu] = useState([
    { item: "Quesadilla", price: 13, img: quesadilla },
    { item: "Enchiladas", price: 15, img: enchiladas},
    { item: "Mini Tacos", price: 50, img: miniTacos},
    { item: "Taquitos", price: 20, img: taquitos},
    { item: "Nachos", price: 12, img: nachos},
  ])

  const [orderAdd, setOrderAdd] = useState([])
  const [total, setTotal] = useState(0)

  const handleOrderAdd = (index) => {
    const plateObj = showMenu[index]
    setOrderAdd([...orderAdd, plateObj])
    calcTotal()
  }

  const calcTotal = () => {
    let price = orderAdd.reduce((total, currentVal) => total + currentVal.price, 0)
    let priceTax = (price * .075) + price
    const dollarFormat = priceTax.toFixed(2)
    setTotal(dollarFormat)
    return dollarFormat
  }

  const handleDelete = (index) => {
    const price = orderAdd[index].price
    setTotal(total - price)
    console.log(orderAdd.splice(index, 1))
  }

  return (
    <>
    <div className='page-wrapper'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='col menu-cont2'>
          {showMenu.map((plate, index) => {
            return <Menu plate={plate} key={index} index={index} handleOrderAdd={handleOrderAdd} />
          })}
        </div>
        <div className='col'>
        <h2>Order Total</h2>
          {orderAdd.map((foodObj, index) => {
            return <Order foodObj={foodObj} key={index} index={index} calcTotal={calcTotal} handleDelete={handleDelete}  />
          })}
          <p className='total'>Total: {total}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
