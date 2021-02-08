import React, {useContext} from 'react' 
import {Context} from "./Context"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <p>
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </p>
        </header>
    )
}

export default Header