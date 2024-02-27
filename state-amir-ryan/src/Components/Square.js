import React, { useState } from "react"

const Square = () => {
    const [colorIndex, setColorIndex] = useState(0) 
    const colors = ["Green", "Purple", "Yellow", "Blue", "orange", "pink"]
  
    const handleClick = () => {
    if (colorIndex <= colors.length - 1) {
    setColorIndex(colorIndex + 1)
  }
    } 
    return (
      <>
        <div onClick={handleClick} className="counter-box" style={{backgroundColor: colors[colorIndex] }}>
          {colors[colorIndex]}
        </div>
      </>
    )
   } 

export default Square