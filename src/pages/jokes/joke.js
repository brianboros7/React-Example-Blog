import React from 'react'; 
import jokeData from './pages/jokes/JokesData'; 

function Jokes(props) { 
    return (
        <div>
            <h3 stale={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#88888"}}>Answer: {props.punchLine} </h3>
        </div>
    )
}

export deafault Jokes; 