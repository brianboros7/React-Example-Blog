import React from 'react'; 

function Joke(props) { 
    return (
        <div>
            <h3 stale={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#88888"}}>Answer: {props.punchLine} </h3>
        </div>
    )
}

export default Joke; 