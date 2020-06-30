import React, { Component } from 'react'; 
import ToDoItem from '../../pages/landing/ToDo';
// import VideoAPI from './component/VideoAPI'; 
import Joke from './pages/jokes/Joke'; 
import jokeData from './pages/jokes/JokesData'; 

function MainSection() {
    const jokeComponents = JokesData.map(joke => 
        <Joke 
            key={joke.id} 
            question={joke.question} 
            punchLine={joke.punchLine} 
        /> 
    )
    
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
    timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            <div>
                <h2>Content</h2>
            </div>
            <div>
                <h3> Video API </h3>
            </div>

            <div> 
                <h2> {jokeComponents}</h2> 
            </div>

            <div>
                <h2> Good {timeOfDay}!</h2>
            </div>

            <ToDoItem /> 
        </div> 
    )
}   
    
export default MainSection; 