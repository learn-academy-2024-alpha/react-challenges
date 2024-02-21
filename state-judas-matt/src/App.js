import { useState } from "react";
import Box from "./component/Box";
import "./App.css";




function App() {
const [boxNumber, setBoxNumber] = useState([])



const handleAdd = () => {
    setBoxNumber([...boxNumber, <Box key={boxNumber.length}/>])
}
const handleRemove = () => {
  setBoxNumber(boxNumber.slice(0, -1))
  }


  return (
    <>
      <h1>Color Box Game</h1>
        <button onClick={handleAdd} className="add">Add Box</button>
        <button onClick={handleRemove}className="remove">Remove Box</button>
        {boxNumber}
        
    </>
  );
}

export default App;
