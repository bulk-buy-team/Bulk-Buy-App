import React from 'react'
import BottomNavBar from './Navs';
import Search from './Search'
import arrow from '../images/arrow_back_ios_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png'
import goods from "../Goods.js";
import ProductCard from './Cards';


function Products () {
  return <div>
      <div style={{display: 'grid'}}>
        <a href="./Home" 
        style={{ 
        position: 'absolute', 
        left: '50px', 
        top: '6%', 
        transform: 'translateY(-50%)', }} > 
        <img src={arrow} 
        alt="Go to Products Page" 
        style={{ 
        width: '80px', 
        height: '80px', 
        cursor: 'pointer' 
        }} 
        /> 
        </a>
        <h1
         style= {{
           fontSize: '90px',
           fontWeight: 'bold',
           textAlign: 'left',
           marginLeft: '140px',
           marginTop: '70px',
           marginBottom: '50px',
         }}>Products</h1>
         <Search />
      </div>
      <div
      style={{
        display: 'flex',
        width: '1000px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '50px',
      }}
    >
      <ProductCard 
        name={goods[0].name}
        image={goods[0].image}
        alt={goods[0].alt}
        price={goods[0].price}
      />
      <ProductCard 
        name={goods[1].name}
        image={goods[1].image}
        alt={goods[1].alt}
        price={goods[1].price}
      />
      </div>
      <div style={{display: 'flex'}}>
        <ProductCard 
        name={goods[2].name}
        image={goods[2].image}
        alt={goods[2].alt}
        price={goods[2].price}
      />
      <ProductCard 
        name={goods[3].name}
        image={goods[3].image}
        alt={goods[3].alt}
        price={goods[3].price}
      />
      </div>
      <div style={{display: 'flex'}}>
       <ProductCard 
        name={goods[4].name}
        image={goods[4].image}
        alt={goods[4].alt}
        price={goods[4].price}
      />
      <ProductCard 
        name={goods[5].name}
        image={goods[5].image}
        alt={goods[5].alt}
        price={goods[5].price}
      />
      </div>
      <div style={{display: 'flex'}}>
       <ProductCard 
        name={goods[4].name}
        image={goods[4].image}
        alt={goods[4].alt}
        price={goods[4].price}
      />
      <ProductCard 
        name={goods[5].name}
        image={goods[5].image}
        alt={goods[5].alt}
        price={goods[5].price}
      />
      </div>
    <BottomNavBar />
  </div>
}


export default Products;