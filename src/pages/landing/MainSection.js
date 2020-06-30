import React, { Component } from 'react'; 
import ToDoItem from '../../pages/landing/ToDo';
// import VideoAPI from './component/VideoAPI'; 
import Joke from './pages/jokes/Jokes'; 

function MainSection() {
    const jokeComponents = JokesData.map(jokes => {
        <Joke 
            key={jokes.id} 
            question={jokes.question} 
            punchLine={jokes.punchLine} 
        /> 
    });
    
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
                {jokeComponents}
            </div>

            <div>
                <h2> Good {timeOfDay}!</h2>
            </div>

            <ToDoItem /> 
        </div> 
    )
}   
    
export default MainSection; 