import { useState } from "react"



const Box = () => {
  const [colorIndex, setColorIndex] = useState(0)


  const array = ["white", "red", "yellow", "orange", "green", "blue", "purple", "pink"]


  const handleColor = () => {
    if(colorIndex < 7)
    setColorIndex(colorIndex + 1)
  }

  return(
    <button onClick={ handleColor } 
      className="box-border"
      style={{backgroundColor: array[colorIndex]}}>
        
    </button>
  )

}

export default Box

