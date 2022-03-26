import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Products = ({product,addToCart}) => {
    const {img, name, price}=product
    return (
        
        <div className='product'>
            <img src={img} alt="lk" />
            <div className="product-detailes">
                <h2>{name}</h2>
                <h5>Price: ${price}</h5>
                <button className='btn' onClick={()=>addToCart(product)}>Add To Cart  <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>

    );
};

export default Products;