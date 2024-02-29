import './App.css'
import React, { useState } from 'react'
import BadRobot from './components/BadRobot';
import GoodRobot from './components/GoodRobot';
import McGregorBot from './components/McGregorBot';
import ShrekBot from './components/ShrekBot';

const App = () => {
  const [userInput, setUserInput]= useState("")

  const handleChange = (e) =>{
    setUserInput(e.target.value)
    const arrOfClasses = document.querySelectorAll(".invisible")
    for(let i = 0; i < arrOfClasses.length; i++) {
      arrOfClasses[i].classList.remove("invisible")
    }
  }
  return (
    
  <>
  <div className='page-wrapper'>
    <div className='sub-wrapper'>
      <div className='center-titles'>
        <h1 style={{ color: "#BCF908" }}>Robo Active Listening</h1>
        <label>Say Something</label>
        <input className='input' type="text" onChange={handleChange} placeholder='type type type...'/>
      </div>
      <div className='robot-container'>
        <GoodRobot userInput={userInput} />
        <BadRobot userInput={userInput}/>
        <McGregorBot userInput={userInput} />
        <ShrekBot />
      </div>
    </div>
  </div>
  </>
  )
}



export default App;
