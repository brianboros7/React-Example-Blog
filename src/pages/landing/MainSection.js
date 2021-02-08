import React from 'react'; 
import './style.css'; 
import StarWars from '../../components/api/star-wars/StarWars'
import UnsplashAPI from '../../components/api/unsplash-photos/UnsplashAPI'; 

function MainSection(isDayTime) {  

    return (  
        <main className="main bg-green-100">
            <section className="main-header flex">
                <div className="main-header-image p-4">
                    <UnsplashAPI />  
                </div>
                <div className="intro p-4">
                    <h1 className="p-1">
                        {isDayTime ? "Good day" : "Good evening"} <StarWars className="p-1" />,   
                        thanks for checking out some stuff I've built with the React JavaScript Framwork and soem other cool tool's and tech. 
                    </h1>
                </div> 
            </section> 
            <section className="projects py-2">
                <div className="projects-heading p-2"> 
                    <h2 className="py-2">My React Projects</h2>
                    <h3 className="p-2"> 
                        Below you'll find a mix of things such as API's, JavaScript functions, render props, 
                        and links to the associated Github repo to see the code I used which came from courses I've taken while learning 
                        React. 
                    </h3>
                </div>
            </section>
        </main>            
    )
}

export default MainSection