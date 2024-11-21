import React from "react";
import goods from "../Goods.js";
import image from '../images/Rice.png';


function Goods(props){
  return <div>
    <div 
    style={{
      borderRadius: '25px',
      position: 'relative',
      padding: '25px 15px',
      backgroundColor: 'grey',
      margin: '50px 40px 10px',
      height: '500px',
      boxShadow: '0 2px 5px green',
      textAlign: 'left',
      width: '400px'
    }}
    >
      <img
        style={{
          height: '330px',
          width: '300px',
          margin: '30px'
        }}
        src={props.image}
        alt={props.alt}
      />
      <p><strong>{props.name}</strong></p>
      <p>{props.price}</p>
    </div>
    <button 
    style={{
      margin: '0 40px',
      height: '50px',
      width: '400px',
      borderRadius: '15px',
      boxShadow: '0 2px 5px green',
      backgroundColor: 'green',
      fontSize: '30px',
      color: 'white'
    }} 
    type="submit"><strong>Bulk Buy</strong></button>
  </div>
}

export default Goods