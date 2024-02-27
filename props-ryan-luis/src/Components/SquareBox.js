import React from "react"


const SquareBox = (props) => {
    // console.log(props.nextNumber)
    return (
        <div onClick={props.nextNumber} className="box">
            <h3>Your Roll:
            </h3>
            <img className="muldice" src={props.currentNumber}></img>
            <div className="morgan">
                <h4> Roll log </h4>

                <ul className="roll-log">
                    {props.rollLog.map((roll, index) => (
                        <li key={index} > <img className="rolldice" src={roll}></img> </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}


export default SquareBox