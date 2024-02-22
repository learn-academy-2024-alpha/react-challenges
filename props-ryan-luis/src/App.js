import "./App.css"
import SquareBox from "./Components/SquareBox";
// import DiceBox from "./Components/DiceBox";
import React, { useState } from "react";

const App = () => {
  const diceNumbers = [1, 2, 3, 4, 5, 6]

  const [currentNumber, setCurrentNumber] = useState(diceNumbers[0])
  const [rollLog, setRollLog] = useState([])

  

  const nextNumber = () => {
    const nextIndex = Math.floor(Math.random() * diceNumbers.length)
    const nextNumber = diceNumbers[nextIndex]
    setCurrentNumber(nextNumber)
    setRollLog([...rollLog, nextNumber])
  }
  
 
  return (
    <>
      <h1> Dice Roller </h1>
      <div>
        {/* <p>{currentNumber}</p> */}
         <SquareBox currentNumber = {currentNumber} nextNumber={nextNumber}rollLog={rollLog}/>
      </div>
    </>

  )
}


export default App;
