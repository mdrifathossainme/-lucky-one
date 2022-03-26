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
    let newCart=[]
    if(productsDetails.length<=2){
      const exities=productsDetails.find(product=>product.id===allProducts.id)
      if(!exities){
        newCart=[...productsDetails,allProducts]    
      }
      else{
        alert('Already Add')
      }
        setProductsDetails(newCart)
    }  
    else{
      alert('You Pick only 3 product')
    }   
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
                  <h1><Cart item={item}key={item.id}></Cart></h1>
                ))}
              <button className='cart-btn' >CHOOSE 1 FOR ME</button><br />
              <button className='cart-btn'>CHOOSE AGAIN</button>
              
            </div>
          </div>
        </div>
    );
};

export default Shop;