import React, { useState } from 'react'
import GoodRobot from './Component/GoodRobot';
import BadRobot from './Component/BadRobot';
import MissyElliBot from './Component/MissyEllibot';

const App = () => {
  
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  
  
  return (
    <>
    <h1>TALKO BOT ~BEE BOP BEE BO~</h1>
    <label>
      Say something
      </label>
      <input type="text" value={userInput} onChange={handleChange}/>
      <GoodRobot userInput={userInput}/>
      <BadRobot userInput={userInput}/>
      <MissyElliBot userInput={userInput}/>
    </>
  )
}

export default App




