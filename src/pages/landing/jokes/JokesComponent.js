import React from 'react';
import Joke from '../jokes/Joke'; 
import JokesData from '../jokes/JokeData'; 

const jokeComponents = () => { 
    JokesData.map(joke => 
        <Joke 
            key={joke.id} 
            question={joke.question} 
            punchLine={joke.punchLine} 
        /> 
    )

    return (
        <div> 
            <h2>Good {jokesCompoents}!</h2>
        </div>
    )
}

export default jokeComponents; 