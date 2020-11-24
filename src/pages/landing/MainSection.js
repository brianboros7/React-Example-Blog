import React from 'react'; 
import './style.css'
import VideoAPI from '../../components/api/VideoAPI'; 
import ToDoApp from '../landing/todo-app/ToDoApp'; 
// import TypingGame from '../landing/speed-typing-game/TypingGame'; 
import MovieSearch from './movie-search/MovieSearch'; 
import EcommercePhotosApp from './ecommerce-capstone/EcommercePhotosApp'; 
import {ContextProvider} from './ecommerce-capstone/Context'; 


function MainSection(isDayTime) {

    return (  
        <main className="py-10">
            <div className="date-time-container py-10 bg-green-400"> 
                <h3>
                    {isDayTime ? "Good day" : "Good evening"}, thanks for checking out some stuff I've learned. 
                    Below you'll find a mix of things such as API's, JavaScript functions, render props, and links to the associated Github repo to see the code I used which came from courses I've taken while learning React.
                </h3>
            </div> 

            <div className="ecommerce-capstone-container py-10 bg-green-200">
                <ContextProvider> 
                    <h1>Ecommerce Photos App Capstone Scrimba project</h1>
                    <EcommercePhotosApp />
                </ContextProvider> 
            </div>

            <div className="todo-app-container py-10 bg-orange-500"> 
                <h1>This is a little to-do app similar to apps liek Asana.</h1>
                <ToDoApp /> 
            </div>

            <div className="movie-search-container py-10 bg-green-200"> 
            <h1>The Movie search App</h1>
                <MovieSearch /> 
            </div>
            
            <div className="video-api-container flex py-10 bg-orange-500">
                <h1>
                    Check out this video API I learned from a Linkedin Learning (actual site) 
                    that showcases how to fetch a URL, and display the video content in different ways. 
                </h1>
                <VideoAPI className="flex flex-row"/> 
            </div> 

            <div className="speed-typing-container py-10 bg-green-200"> 
                <h3>This is a Speed Typing Game App that I've learned on Scrimba </h3>
                {/* <TypingGame /> */}
            </div>
        </main>            
    )
}

export default MainSection