import React from 'react';
import Icon from '../images/account_circle_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png';

const WelcomeBanner = ({ name }) => {
  return (
    <div style={styles.banner}>
      <div style={styles.iconContainer}>
         <img src={Icon} alt="User Icon" style={styles.icon} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Welcome {name}!</h2>
        <p style={styles.subtitle}>Welcome back, you've been missed</p>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F2A900',
    padding: '16px',
    borderRadius: '20px',
    color: '#fff',
    marginTop: '35px',
    marginLeft: '58px',
    width: '800px',
    height: '250px',
  },
  iconContainer: {
    marginRight: '12px',
    marginLeft: '30px',
  },
  icon: {
    fontSize: '500px',
    height: '100%',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: 0,
    color: '#fff',
    fontSize: '60px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 0,
    fontSize: '30px',
  },
};

export default WelcomeBanner;