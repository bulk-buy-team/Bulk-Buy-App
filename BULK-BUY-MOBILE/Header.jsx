import React from "react";
import bellIcon from '../images/notifications_30dp_BLACK_FILL0_wght400_GRAD0_opsz24.png'

function Header() {
  const handleBellClick = () => {
    alert("No new notifications");
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: 'white',
          textAlign: 'left',
          display: 'flex',
          height: '15pc',
          width: '59pc'
        }}
      >
        <h1
          style={{
            textAlign: 'left',
            color: 'black',
            fontWeight: '5rem',
            fontSize: '100px',
            margin: '30px',
            marginTop: '15px'
          }}
        >
          Home
        </h1>
        <div
          style={{
            margin: '73px',
            marginLeft: '500px',
          }}
        >
          <img
            src={bellIcon}
            alt="Bell Icon"
            style={{
              width: '70px',
              height: '70px',
              cursor: 'pointer',
            }}
            onClick={handleBellClick}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;