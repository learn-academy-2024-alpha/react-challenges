  import { useState } from "react"
  import "./App.css"
  import React from "react";
  import Square from "./Components/Square";
 
 
 const App = () => {
   const [boxes, setBoxes] = useState([])

   const addBox = () => {
   setBoxes([...boxes, <Square key={boxes.length} />])
   
  }

  const removeBox = () => {
    if (boxes.length > 0){
      const newBoxes = [...boxes]
      newBoxes.pop()
      setBoxes(newBoxes)
    }
  }

  return (
    <>
      <h1>Good Times With Color Boxes</h1>
      {boxes}
      <button onClick={addBox}> Add Box</button>
      <button onClick={removeBox}> Remove Box</button>
    </>
  )
  }


export default App;
