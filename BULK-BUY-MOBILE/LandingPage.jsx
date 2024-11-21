import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import logo from '../images/IMG_7020.PNG';

function LandingPage() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/SignUp');
  };

  const goToLogin = () => {
    navigate('/Login');
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoSection}>
          <img src={logo}></img>
        </div>
        <h2>Welcome!</h2>
        <div className={styles.btn}>
          <button onClick={goToSignUp} className={styles.createAccountBtn}>Create Account</button>
          <button onClick={goToLogin} className={styles.loginBtn}>Login</button>
         </div>
       </div>
    </div>
  );
}

export default LandingPage;