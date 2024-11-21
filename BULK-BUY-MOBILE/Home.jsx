import React from 'react';
import Header from "./Header";
import Search from "./Search";
import goods from "../Goods.js";
import PCard from './DeliveryButton';
import WelcomeBanner from './Welcome';
import Icon from '../images/account_circle_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png';
import MyComponent from './Logo';
import ProductCard from './Cards';
import BottomNavBar from './Navs';
import arrow from '../images/chevron_right_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png';


function Home () {
  return <div>
    <MyComponent />
    <Header />
    <Search /> 
    <WelcomeBanner name="Emmanuel" IconComponent={Icon} />;
    <PCard />
    <div
      style={{
        display: 'flex',
        width: '900px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '200px',
        position: 'relative',
      }}
    >
      <ProductCard 
        name={goods[0].name}
        image={goods[0].image}
        alt={goods[0].alt}
        price={goods[0].price}
      />
      <a href="./Products" 
      style={{ 
      position: 'absolute', 
      right: '-50px', 
      top: '40%', 
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
 
      <ProductCard 
        name={goods[1].name}
        image={goods[1].image}
        alt={goods[1].alt}
        price={goods[1].price}
      />

    </div>
    <BottomNavBar />
  </div>
    };
    
  

export default Home;
  <a href="./Products" style={{ position: 'absolute', right: '-50px', top: '40%', transform: 'translateY(-50%)', }} > <img src={arrow} alt="Go to Products Page" style={{ width: '80px', height: '80px', cursor: 'pointer' }} /> </a>
