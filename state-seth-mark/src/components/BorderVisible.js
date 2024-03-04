import { useState } from "react"

const BorderVisible = () => {
  const [makeVisible, setmakeVisible] = useState(true)

  const addBox = () => {
    setmakeVisible(!makeVisible) 
  }
    return (
        <div>
      {/* Element with conditional border styling */}
      <div style={{ border: makeVisible ? '1px solid black' : 'none', padding: '20px' }}>
        
      </div>
      {/* Button to toggle the visibility of the border */}
      <button onClick={addBox}>Toggle Border</button>
    </div>
    )
  }

  export default BorderVisible