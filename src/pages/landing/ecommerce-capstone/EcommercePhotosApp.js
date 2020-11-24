import React from 'react';
import './style.css'
import Photos from './Photos';
import Cart from './Cart' 



function EcommerceCapstone() {

    return(
        <section className="ecommerce-capstone-section">
            <div className="ecommerce-capston-wrapper lg:py-10">
                <div className="ecommerce-capstone-main"> 
                    <header className="ecommerce-capstone-header bg-red-400">
                        <h4>Pic Sum App</h4>
                    </header> 

                    <Cart /> 
                    <Photos /> 
                </div>
            </div>
        </section>
    )
}

export default EcommerceCapstone 