import React from 'react';
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'; 

function NavBar() {

    return(
        <div className="flex flex-wrap py-2">
            <div className="w-full px-4">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 rounded">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
                                B's Projects
                            </a>
                            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>

                                <span className="block relative w-6 h-px round...ite mt-1"></span>
                            </button>
                        </div>
                        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/netflix-react-example" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Netflix Clone
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ecommerce-capstone" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                         E-commerce PhotoApp 
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/todo-app" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        ToDo's App
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/movie-search" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                         Movie Search 
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/speed-typing-game" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                         Speed Typing Game 
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div> 
    )
}

export default NavBar 