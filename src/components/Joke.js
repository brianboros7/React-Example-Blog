import React from 'react';

function Jokes(props) {
    return(
        <div> 
            <h3> Question {props.questions} </h3>
           <h3> Answer {props.punchLine} </h3> 
        </div>
    )
}

export default Jokes; 