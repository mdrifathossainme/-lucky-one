import React from 'react';
import './Product.css'

const Products = ({product}) => {
    const {img, name, price}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-detailes">
                <h2>{name}</h2>
                <h5>Price: ${price}</h5>
                <button className='btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;