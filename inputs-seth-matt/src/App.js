import React, { useState } from 'react'
import TheGoodRobot from './components/TheGoodRobot'
import TheBadRobot from './components/TheBadRobot'
import TheUglyRobot from './components/TheUglyRobot'
import './App.css'



const App = () => {
  const [userInput, setUserInput]= useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }



  return (
    <>
    <h1>The Good, The Bad, The Ugly</h1>
    <div>
      <label>Say Something: </label>
      <input value={userInput}
             onChange={handleChange}
             placeholder='Type Text Here'
             />
          

    </div>

    <div>
      <label>The Good Robot</label>
      <TheGoodRobot userInput={userInput}/>
    </div>
  
    <div>
        <label>The Bad Robot</label>
        <TheBadRobot userInput={userInput}/>  
    </div>
      
    <div>
      <label>The Ugly Robot</label>
      <TheUglyRobot userInput={userInput} />
    </div>
    
    
    </>
  )
}

export default App
