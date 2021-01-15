import React from 'react'; 
import './style.css'
import UnsplashAPI from '../../components/api/unsplash-photos/UnsplashAPI'; 
import Header from './../../components/app/Header'
import NetFlixMain from './../netflix-react-example/NetFlixMain'

function MainSection(isDayTime) {
     


    return (  
        <main className="main bg-green-100">
            <section className="main-header flex">
                <div className="main-header-image">
                    <UnsplashAPI />  
                </div>
                <div className="intro py-5">
                    <h1>
                        {isDayTime ? "Good day" : "Good evening"}, thanks for checking out some stuff I've built with React tool's. 
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
                    <h4 className="py-2">
                        Search Projects:
                    </h4>
                </div>
                <Header /> 
                <NetFlixMain /> 
                <div> 
                    <div> 

                    </div>
                </div>
            </section>
        </main>            
    )
}

export default MainSection