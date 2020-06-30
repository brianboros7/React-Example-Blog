import React from 'react'; 
import ToDoItem from '../landing/todo-app/ToDoItem';
import ToDosData from '../landing/todo-app/ToDosData'; 
// import VideoAPI from './component/VideoAPI'; 
import Joke from '../jokes/Joke'; 
import JokesData from '../jokes/JokeData'; 

function MainSection() {
    const todoItems = ToDosData.map(item => <ToDoItem key={item.id} item={item} />)

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
                <h2>{jokeComponents}</h2> 
            </div>

            <div>
                <h3> Video API </h3>
            </div>

            <div>
                <h2> Good {timeOfDay}!</h2>
            </div>

            <div className="todo-item"> 
                <h3>{todoItems}</h3>
            </div> 
        </div> 
    )
}   
    
export default MainSection; 