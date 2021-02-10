import React, {useContext} from 'react'; 
import './style.css'
import Image from "./Image"
import {Context} from "./Context"
import {getClass} from "./index.js"
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'; 


function Photos() {
    const {allPhotos} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    // const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    // const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"> onClick={() => removeFromCart(img.id)}</i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    
    const imageElements = allPhotos.map((img, i) => (
        <Card key={img.id}> 
            <Card.Img>        
                <Image img={img} className={getClass(i)} />
            </Card.Img>
            <Card.Body>
                {heartIcon()}
                {cartIcon()}
            </Card.Body>
        </Card>
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

Photos.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Photos  