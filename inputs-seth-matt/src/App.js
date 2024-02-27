import React, { useState } from 'react'
import TheGoodRobot from './components/TheGoodRobot'
import TheBadRobot from './components/TheBadRobot'
import TheUglyRobot from './components/TheUglyRobot'



const App = () => {
  const [userInput, setUserInput]= useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }



  return (
    <>
    <h1>Robo Active Listening</h1>
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
    </div>
    
    
    </>
  )
}

export default App
