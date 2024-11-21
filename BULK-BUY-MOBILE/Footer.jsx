import React from "react";

function Footer() {
  
  const currentYear = new Date().getFullYear();
  
  return <footer 
  style={{
    position: 'absolute',
    textAlign: 'center',
    bottom: '0',
    width: '100%',
    height: '2.5rem'
  }}
  >
  <p 
  style={{
    color: 'black'
  }}>
    Copyright © {currentYear}
  </p>
  </footer>
};

export default Footer;