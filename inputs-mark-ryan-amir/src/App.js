import React, { useState } from 'react'
import GoodRobot from './Component/GoodRobot';
import BadRobot from './Component/BadRobot';
import MissyElliBot from './Component/MissyEllibot';
import './App.css';
import robot from './images/robot.webp'
import background from './images/background.webp'

const App = () => {
  
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  
  
  return (
    <>
    <div className='title'>
    <h1><u>TALKO BOT</u></h1> 
    </div>
    <div className='background'>
    <h2>~BEE BOP BEE BO~</h2>
    <img src={robot}></img>
    <br />
    <br />
    
    <div className='robots'>
    <label>
      Say something:
      </label>

      <input type="text" value={userInput} onChange={handleChange} placeholder="talk to me"/>
      <GoodRobot userInput={userInput}/>
      <BadRobot userInput={userInput}/>
      <MissyElliBot userInput={userInput}/>
      </div>
      </div>
    </>
  )
}

export default App




