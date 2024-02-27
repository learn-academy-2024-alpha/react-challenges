import React, { useState } from 'react'
import BadRobot from './components/BadRobot';
import GoodRobot from './components/GoodRobot';
import McGregorBot from './components/McGregorBot';

const App = () => {
  const [userInput, setUserInput]= useState("")
  const handleChange = (e) =>{
   setUserInput(e.target.value)

  }
  return (
    
  <>
  <label>Say Something</label>
  <input type="text" onChange={handleChange}/>
    <GoodRobot userInput={userInput} />
    <McGregorBot userInput={userInput} />
    <BadRobot userInput={userInput}/>
    </>
  )
}



export default App;
