import React from 'react'; 

import VideoAPI from './../../components/VideoAPI'; 
import ToDoApp from '../landing/todo-app/ToDoApp'; 
// import TypingGame from '../landing/speed-typing-game/TypingGame'; 
import MovieSearch from './movie-search/MovieSearch'; 

function MainSection(isDayTime) {
    return (  
        <div>
            <div> 
                <h3>
                    {isDayTime ? "Good day" : "Good evening"}, thanks for checking out some stuff I've learned. 
                    Below you'll find a mix of things such as API's, JavaScript functions, render props, and links to the associated Github repo to see the code I used which came from courses I've taken while learning React.
                </h3>
            </div> 

            <div> 
                <h3>This is a little to-do app similar to apps liek Asana.</h3>
                <ToDoApp /> 
            </div>

            <div> 
                <h3>This is a Movie App</h3>
                <MovieSearch /> 
            </div>
            
            <div>
                <h3>
                    Check out this video API I learned from a Linkedin Learning (actual site) 
                    that showcases how to fetch a URL, and display the video content in different ways. 
                </h3>
                <VideoAPI /> 
            </div> 

            <div> 
                <h3>This is a Speed Typing Game App that I've learned on Scrimba </h3>
                {/* <TypingGame /> */}
            </div>
        </div>            
    )
}

export default MainSection