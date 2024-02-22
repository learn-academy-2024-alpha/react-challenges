import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
import RollLog from './components/RollLog';

const App = () => {

  const [diceRollNum, setDiceRollNum] = useState(1)
  const [currentRoll, setCurrentRoll] = useState([ 1 ])

  const handleDiceClick = () => {
    const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    setCurrentRoll([...currentRoll, num])
  }

  return (
    <>
    <div className='page-wrapper'>
    <div className='header'>
      <h1>Rolling On Props</h1> 
    </div>
  <div className='parent-container'>
    <div className='parent-container'>
      <Dice handleDiceClick={handleDiceClick} />
    </div>

    <div className='parent-container'>
      <RollLog diceRollNum={diceRollNum} currentRoll={currentRoll} />
    </div>
    
  </div>
  </div>
  </>
  )
}

export default App
