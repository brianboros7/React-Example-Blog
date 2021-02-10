import React from 'react';
import './style.css'
import Photos from './Photos';
import Header from './Header'


function EcommercePhotosApp() {

    return(
        <section className="ecommerce-capstone-section">
            <div className="ecommerce-capston-wrapper">
                <Header /> 
                <div className="ecommerce-capstone-main"> 
                    <Photos /> 
                </div>
            </div>
        </section>
    )
}

export default EcommercePhotosApp