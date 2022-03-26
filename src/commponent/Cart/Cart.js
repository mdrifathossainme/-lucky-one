import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    const{name, img,}=item
    return (
        <div>
        <div className="detailes">
        <img src={img} alt="" />
        <p>{name}</p>
        </div>
        </div>
    );
};

export default Cart;