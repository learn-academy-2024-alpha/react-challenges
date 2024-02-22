import React from "react"


const SquareBox = (props) => {
    // console.log(props.nextNumber)
    return (
        <div onClick={props.nextNumber} className="box">
        <h3>Your Roll: {props.currentNumber}
        </h3>
        <div>
       <h4> Roll log </h4> 
       <ul> 
        {props.rollLog.map((roll, index) =>(
            <li key={index} >{roll}</li>
            ))}
        </ul>
            </div>
            </div>
    )
}


export default SquareBox