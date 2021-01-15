import React from 'react';
import {Link} from 'react-router-dom'; 
function NavBar() {

    return(
        <nav /* style={{display: props.on ? "block" : "none"}} */ > 
            <Link to="/" className="nav-item p-2">Home</Link>
            <Link to="/netflix-react-example p-2" className="nav-item">Netflix Example</Link>
            <Link to="/movie-search" className="nav-item p-2">Movie Search</Link> 
            <Link to="/todo-app" className="nav-item p-2">Todos App</Link> 
            <Link to="/speed-typing-game" className="nav-item p-2">Speed Typing</Link> 


        </nav>
    )
}

export default NavBar 