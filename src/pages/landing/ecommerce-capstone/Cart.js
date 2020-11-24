import React, {useContext} from 'react'
import Context from './Context' 

function Cart() {
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <h2>{item.id}</h2>
    ))


    return(
        <div className="cart-page">
            <h3>Check Out</h3>
            {cartItemElements}
        </div>
    )
}

export default Cart 