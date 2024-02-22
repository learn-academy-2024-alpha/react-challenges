import React from "react"


const SquareBox = (props) => {
    // console.log(props.nextNumber)
    return (
        <div onClick={props.nextNumber} className="box">
        <h3>Your Roll: {props.currentNumber}
        </h3>
        </div>
    )
}


export default SquareBox