import React from 'react';
import NavBar from './../menus/NavBar'; 
import './style.css'

function Header() {

    return (
        <header className="header-container bg-gray-800 ">
            <div className="header-content">
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