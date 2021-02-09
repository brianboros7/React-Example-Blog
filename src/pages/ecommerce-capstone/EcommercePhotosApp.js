import React from 'react';
import './style.css'
import Photos from './Photos';
import Cart from './Cart' 
import Header from './Header'


function EcommercePhotosApp() {

    return(
        <section className="ecommerce-capstone-section">
            <div className="ecommerce-capston-wrapper lg:py-10">
                <Header /> 
                <div className="ecommerce-capstone-main"> 
                    

                    <Cart /> 
                    <Photos /> 
                </div>
            </div>
        </section>
    )
}

export default EcommercePhotosApp