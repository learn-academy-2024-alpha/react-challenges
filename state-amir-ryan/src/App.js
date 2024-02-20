 import { useState } from "react"
import "./App.css"
 
 
 const App = () => {
  const [color, setColor] = useState(0) 
  const colors = ["Green", "Purple", "Yellow", "Blue"]
  const handleClick = () => {
if (color <= 4) {
  setColor(color + 1)
}
  } 
  return (
    <>
      <h1>Good Times With Color Boxes</h1>
      <div className="colors" onClick={handleClick} className="counter-box">
        White
      </div>
    </>
  )
 } 



export default App;
