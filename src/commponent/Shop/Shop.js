import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Cart from '../../../../pactice/src/component/Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
// let result = document.querySelector('redom');
const Shop = () => {
    const [products, setProducts]=useState([]);
    const [productsDetails, setProductsDetails]=useState([ ])
    const [random, setrendom]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])


    const addToCart=allProducts=>{  
    let newCart=[]
    if(productsDetails.length<=3){
      const exities=productsDetails.find(product=>product.id===allProducts.id)
      if(!exities){
        newCart=[...productsDetails,allProducts]    
      }
      else{
        alert('Already Add')
        const rest =productsDetails.filter(product=>product.id !==allProducts.id);;
        newCart=[...rest,exities]
      }
        setProductsDetails(newCart)
    }  
    else{
      alert('You Pick only 4 product')
    }   
      }
      const removedCart=()=>{
        setProductsDetails([]);
        setrendom([])
      }
      function getRandomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }

   
      const choose=()=>{
        if(productsDetails.length===0){
          alert('Please select a product')
        }
       else{
        let index = getRandomNumber(0, productsDetails.length-1);
        setrendom(productsDetails[index])
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
                  <h1><Cart item={item}key={item.id} choose={choose}></Cart></h1>
                ))}
              <button className='cart-btn' onClick={choose} >CHOOSE 1 FOR ME</button><br />
              <button className='cart-btn' onClick={removedCart}>CHOOSE AGAIN</button>
              <div className='radom'>
                <p>{random.name}</p>
              </div>
           
            </div>
          </div>
        </div>
    );
};

export default Shop;