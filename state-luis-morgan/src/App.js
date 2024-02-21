import Box from "./Components/Box"
import AddButton from './Components/AddButton';
import RemoveButton from "./Components/RemoveButton";
import { useState } from "react";
const App = () =>{
  const [box, setBox] = useState(0) 
  const onAdd = () =>{
    setBox(box + 1)
  }
  const onRemove = () =>{
    setBox(box - 1)
  }


  return (
    <>
    <AddButton onClick={onAdd}/>
    <RemoveButton onClick={onRemove}/>
    {[...Array(box)].map((_, index)=> {
      <Box key={index}/>
    })}
    </>
  )
}
export default App