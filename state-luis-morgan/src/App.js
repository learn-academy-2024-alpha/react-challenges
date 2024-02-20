import Box from "./Components/Box"
import Buttons from '../src/Components/Buttons';
import { useState } from "react";
const App = () =>{
  const [box, setBox] = useState(0) 


  return (
    <>
    <Buttons />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    </>
  )
}
export default App