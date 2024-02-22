import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
import RollLog from './components/RollLog';

const App = () => {

  const [diceRollNum, setDiceRollNum] = useState(1)
  const [currentRoll, setCurrentRoll] = useState([ 1 ])

  const handleDiceClick = () => {
    const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    setDiceRollNum(num)
    setCurrentRoll([...currentRoll, num])
    rollList(currentRoll)
  }

  const rollList = (updatedArr) => {
    return updatedArr.map(num => {
      return num
    })
  }

  return (
    <>
    <div className='parent-container'>
      <Dice handleDiceClick={handleDiceClick} />
      <RollLog diceRollNum={diceRollNum} currentRoll={currentRoll} />
    </div>
    </>
  )
}

export default App
