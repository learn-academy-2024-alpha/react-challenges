import React, { useState } from "react";

const Counter= () => {
    // Initialize the count state to 0
    const [count, setCount] = useState(0);
  
    // Function to increment the count
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
        <div>
          
         {count}
          
        </div>
      );
    }
    export default Counter