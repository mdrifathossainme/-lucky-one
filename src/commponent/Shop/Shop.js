import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Cart from '../../../../pactice/src/component/Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [productsDetails, setProductsDetails]=useState([ ])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    const addToCart=allProducts=>{
      const newProduct=[...productsDetails,allProducts]
      if(newProduct.length>=5){
        
      }
      setProductsDetails(newProduct)
    }
    return (
        <div className='container'>
          <div className="product-box">
          {
                products.map(product=><Products product={product} key={product.id} addToCart={addToCart}></Products>)
            }
          </div>
          <div className="cart-box">
            <div className="content">
            <h1>Pick Your Product</h1>
            {
                 productsDetails.map((item)=>(
                  <h1><Cart item={item}></Cart></h1>
                ))}
              <button className='cart-btn'>CHOOSE 1 FOR ME</button><br />
              <button className='cart-btn'>CHOOSE AGAIN</button>
            </div>
          </div>
        </div>
    );
};

export default Shop;