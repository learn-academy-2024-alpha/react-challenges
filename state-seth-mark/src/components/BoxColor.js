import React, { useState } from "react"


const BoxColor = () => {

    const [colorIndex, setColorIndex] = useState(0)
    const colorsArr = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]

    const handleClick = () => {
        if(colorIndex < 7)
      setColorIndex(colorIndex + 1)
    }


    return (
        <div onClick={ () => handleClick (colorsArr)} className="color-box" style={{backgroundColor: colorsArr[colorIndex]}}>
          
        </div>
    )

    }
    export default BoxColor