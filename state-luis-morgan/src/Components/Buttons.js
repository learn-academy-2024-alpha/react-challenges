import { useState } from "react"
import Box from "./Box"
const Buttons = () => {
    const newBox = () => {
        console.log("clicked")
         return <Box />
        
    }
    return (
        <>
            <button onClick={newBox} >add box</button>
            <button>remove box</button>
        </>
    )
}
export default Buttons
