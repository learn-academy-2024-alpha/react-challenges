// As a user, I can see a square box on the screen with a black border and a white background.
// As a user, I can see the default color name "white" inside the box.
// As a user, every time I click on the box the name of a different color appears.
// Possible color names: red, orange, yellow, green, blue, purple, pink
// As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
// As a user, I can see many boxes on the page all acting independently of one another.
// 🏔 Stretch Goals
// As a user, I can start with no boxes on the screen.
// As a user, I can see a button to add a box.
// As a user, I can see a button to remove a box.
// As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes.
// As a user, every time I click the remove button, I can remove the last box in the series.


import './Box.css'
import { useState } from 'react';

const Box = () => {
    const colors = [
        'white',
        'green',
        'blue',
        'yellow',
        'magenta',
        'cyan',
        'orange',
        'purple',
        'skyblue',
        'pink'
      ]; 
     const [colorIndex, setColor] = useState(0)
     const handleColorChange = () =>{
        const randomNumber = Math.floor(Math.random() * colors.length);
        setColor(randomNumber) 
        setTextIndex(colors[randomNumber])
     }
     const [textIndex, setTextIndex] = useState("white")
    return (
        <>
        <div className="square" style={{backgroundColor: colors[colorIndex]}} onClick=
        {handleColorChange}>{textIndex}</div>
        </>
    )
}
export default Box