import React from 'react'

const BadRobot = (props) => {
    const blaBla = (input) => {
        let emptyString = '';
        const BLA = ['B', 'L', 'A'];
        for (let i = 0; i < input.length; i++) {
            emptyString += BLA[i % 3];
          }
        
        return emptyString;
      };
    return (
        <>
        <h3><u>Bad Robot</u></h3>
        <p>BadRobot: I hear you saying {blaBla(props.userInput)}. Is that correct?</p>
      </>  
      )
    
    }

export default BadRobot