import Box from "./Components/Box"
import Buttons from '../src/Components/Buttons';
const App = () =>{
  const newBox = () => {
    return(
        <>
        <Box />
        </>
    )
}
  return (
    <>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Buttons onClick={newBox} />
    </>
  )
}
export default App