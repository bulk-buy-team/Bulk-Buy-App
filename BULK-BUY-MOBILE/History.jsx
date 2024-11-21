import React from 'react';
import BottomNavBar from './Navs'
import arrow from '../images/arrow_back_ios_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png'


function History() {
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
         }}>Order History</h1>
      <p style={{
       fontSize: '40px',
       marginRight: '25px',
       marginLeft: '25px',
     }}>You have no previous orders, Go and place an order now</p>
     <BottomNavBar />
  </div>
  </div>
}

export default History;