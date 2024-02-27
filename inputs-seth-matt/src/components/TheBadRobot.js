import userEvent from '@testing-library/user-event'
import React from 'react'

const TheBadRobot = (props) => {

    const letterChanger = (userInput) => {
      
      let firstLetter =userInput.split("").map((v,i) => (i)%3 ? v : "b")
      let secondLetter =firstLetter.map((v,i) => (i+2)%3 ? v : "l")
      let thirdLetter =secondLetter.map((v,i) => (i+1)%3 ? v : "a")
      
      return thirdLetter.join("").toUpperCase()
      
      }
      

  return (
    <div>
      I hear you saying {letterChanger(props.userInput)}. Is that correct?

    </div>
  )
}

export default TheBadRobot
