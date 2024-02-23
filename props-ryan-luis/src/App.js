import "./App.css"
import SquareBox from "./Components/SquareBox";
// import DiceBox from "./Components/DiceBox";
import React, { useState } from "react";


import dice1 from "./Images/dice1.png"
import dice2 from "./Images/dice2.png"
import dice3 from "./Images/dice3.png"
import dice4 from "./Images/dice4.png"
import dice5 from "./Images/dice5.png"
import dice6 from "./Images/dice6.png"

const App = () => {
  const diceNumbers = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [currentNumber, setCurrentNumber] = useState(diceNumbers[0])
  const [rollLog, setRollLog] = useState([])



  const nextNumber = () => {
    const nextIndex = Math.ceil(Math.random() * 6)
    const nextNumber = diceNumbers[nextIndex]
    setCurrentNumber(diceNumbers[nextIndex - 1])
    setRollLog([...rollLog, diceNumbers[nextIndex - 1]])
  }


  return (
    <>
      <h1> Dice Roller </h1>
      <div>
        {/* <p>{currentNumber}</p> */}
        <SquareBox currentNumber={currentNumber} nextNumber={nextNumber} rollLog={rollLog} />
      </div>
    </>

  )
}


export default App;
