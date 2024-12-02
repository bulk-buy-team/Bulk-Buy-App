import React from "react";


function Header() {
  return <div>
    <header
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: '10px 0px 10px 10px',
        borderRadius: '45px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
        textAlign: 'center',
        height: '15pc',
        width: '59pc'
      }}
    >
      <h1
      style={{
        textAlign: 'center',
        color: '#fff',
        fontFamily: '"Mclaren", cursive',
        fontWeight: '5rem',
        fontSize: '100px',
        margin: '80px'
     }}
      >BULK BUY APP</h1>
    </header>
 </div>
};

export default Header;