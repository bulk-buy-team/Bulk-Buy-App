import React from 'react';
import MyImage from '../images/IMG_7020.PNG';

const MyComponent = () => {
  return (
    <div>
      <img 
      src={MyImage} 
      alt="Logo" 
      style={{
        width: '750px',
        height: '250px',
        margin: '40px'
      }}
      />
    </div>
  );
};

export default MyComponent;