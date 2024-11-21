import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image1 from '../images/shopping_cart_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import image2 from '../images/calendar_month_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import image3 from '../images/house_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import image4 from '../images/person_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';

const BottomNavBar = () => {
  const location = useLocation(); // Get the current route

  const navBarStyle = {
    position: 'fixed',
    bottom: '10px',
    width: '98%',
    marginLeft: '10px',
    borderRadius: '30px',
    backgroundColor: '#d32f2f',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '150px',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };

  const navItemContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 'none', // Prevent item from stretching
    width: '80px', // Reduce space taken by each item
  };

  const navItemStyle = (isActive) => ({
    textAlign: 'center',
    color: 'white',
    backgroundColor: isActive ? '#F2A900' : 'transparent',
    borderRadius: '40px',
    width: '100px', // Explicitly reduce the transparent background width
    height: '90px', // Increase height for better appearance
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const iconStyle = {
    height: '60px',
    width: '60px',
  };

  return (
    <div style={navBarStyle}>
      <div style={navItemContainerStyle}>
        <a href="/home">
          <div style={navItemStyle(location.pathname === '/home')}>
            <img className="icon-home" src={image3} alt="Home" style={iconStyle} />
          </div>
        </a>
      </div>
      <div style={navItemContainerStyle}>
        <a href="/Cart">
          <div style={navItemStyle(location.pathname === '/Cart')}>
            <img className="icon-cart" src={image1} alt="Cart" style={iconStyle} />
          </div>
        </a>
      </div>
      <div style={navItemContainerStyle}>
        <a href="/History">
          <div style={navItemStyle(location.pathname === '/History')}>
            <img className="icon-calendar" src={image2} alt="Calendar" style={iconStyle} />
          </div>
        </a>
      </div>
      <div style={navItemContainerStyle}>
        <Link to="/Profile">
          <div style={navItemStyle(location.pathname === '/Profile')}>
            <img className="icon-user" src={image4} alt="Profile" style={iconStyle} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;