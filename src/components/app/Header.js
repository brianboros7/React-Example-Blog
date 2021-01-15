import React from 'react';
import NavBar from './../NavBar'; 
import './style.css'

function Header() {
    // let menu = ['Home', 'About', 'Blog']

    return (
        <header className="header-container bg-gray-600 ">
            <div className="header-content text-align-center">
                <NavBar /> 
                {/*
                <button 
                    className="menu-btn"
                    // onClick={PaymentResponse.toggle}>
                    // {PaymentResponse.on ? "Show" : "Hide"} 
                    >Menu 
                </button>
            */}
            </div>
        </header>
    )
}

export default Header;