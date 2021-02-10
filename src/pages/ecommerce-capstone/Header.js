import React, {useContext} from 'react' 
import './style.css'
import {Context} from "./Context"
import {Link} from 'react-router-dom'

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header className="ecommerce-header">
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart" className="cart-icon">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
                <p className="cart-icon-p">Cart</p>
            </Link>
        </header>
    )
}

export default Header