import React from "react"

const MissyElliBot = (props) => {
  const nameReversed = (userInput) => {
    let reversedName = userInput.split("").reverse().join("").toLowerCase()
    let firstLetter = reversedName.charAt(0).toUpperCase()
    let restOfName = reversedName.slice(1)
    return `${firstLetter}${restOfName}`
  }

  return (
    <>
      <h3><u>Missy Elli-Bot</u></h3>
      <p>MissyElliBot: I put my thing down, flip it, and reverse it {nameReversed(props.userInput)}. Is that correct?</p>
    </>
  )
}

export default MissyElliBot