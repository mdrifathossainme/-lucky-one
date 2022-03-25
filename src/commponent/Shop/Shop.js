import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='container'>
          <div className="product-box">
          {
                products.map(product=><Products product={product} key={product.id}></Products>)
            }
          </div>
          <div className="cart-box">
            <div className="content">
            <h1>Your Product</h1>
              <button className='cart-btn'>CHOOSE 1 FOR ME</button><br />
              <button className='cart-btn'>CHOOSE AGAIN</button>
            </div>
          </div>
        </div>
    );
};

export default Shop;