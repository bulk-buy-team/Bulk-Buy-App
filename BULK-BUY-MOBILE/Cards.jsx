import React, { useState } from 'react';

function ProductCard(props){
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  
  return (
    <div style={{ margin: '25px' , border: 'none', borderRadius: '8px', padding: '16px', width: '450px' ,marginLeft: '50px'}}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ 
        height: '400px',
        width: '100%', 
        borderRadius: '8px',
        border: '3px solid #d0430e'
        }}
      />
      <h3
      style= {{
        textAlign: 'left',
        fontSize: '3rem',
      }}
      >{props.name}</h3>
      <p 
      style={{ 
      fontWeight: 'bold', 
      textAlign: 'left',
      color: '#555',
      fontSize: '2rem',
      }}
      >{props.price}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div>
          <button
            style={{
              marginTop: '10px',
              marginRight: '20px',
              padding: '10px 20px',
              backgroundColor: '#d0430e',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={decreaseQuantity}
            style={{
              padding: '10px',
              marginRight: '15px',
              backgroundColor: '#f5f5f5',
              border: 'none',
              cursor: 'pointer',
              fontSize: '2rem',
              fontWeight: 'bold',
              borderRadius: '5px',
            }}
          ><strong>
            -
          </strong>
          </button>
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}      >{quantity}</span>
          <button
            onClick={increaseQuantity}
            style={{
              padding: '10px',
              marginLeft: '10px',
              backgroundColor: '#f5f5f5',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '2rem',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;