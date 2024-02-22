import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
import RollLog from './components/RollLog';
import RemoveBtn from './components/RemoveBtn'
import Dice1 from './1-dice.png'
import Dice2 from './2-dice.png'
import Dice3 from './3-dice.png'
import Dice4 from './4-dice.png'
import Dice5 from './5-dice.png'
import Dice6 from './6-dice.png'

const App = () => {

  const [diceRollNum, setDiceRollNum] = useState(1)
  const [currentRoll, setCurrentRoll] = useState([ 1 ])
  const [diceImage, setDiceImage] = useState(Dice1)

  const imagePathways = [
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6
  ]

  const handleDiceClick = () => {
    const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    setCurrentRoll([...currentRoll, num])
    setDiceImage(imagePathways[num - 1])
  }

  return (
    <>
    <div className='page-wrapper'>
    <div className='header'>
      <h1>Rolling On Props</h1> 
    </div>
  <div className='parent-container'>
    <div className='parent-container'>
      <Dice handleDiceClick={handleDiceClick} diceImage={diceImage} />
    </div>

    <div className='parent-container'>
      <RollLog diceRollNum={diceRollNum} currentRoll={currentRoll} />
    </div>
  </div>
  {/* <RemoveBtn /> */}
  </div>
  </>
  )
}

export default App
