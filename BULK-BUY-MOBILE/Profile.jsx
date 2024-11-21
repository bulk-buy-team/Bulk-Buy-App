import React from 'react';
import BottomNavBar from './Navs';
import { useNavigate } from 'react-router-dom'; 
import arrow from '../images/arrow_back_ios_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png';
import Payment from '../images/payments_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
import Icon from '../images/account_circle_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png';
import History from '../images/calendar_month_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import Question from '../images/question_mark_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import Settings from '../images/settings_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import Logout from '../images/logout_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'

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
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '50px',
    width: '950px',
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

const Button = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        color: '#fff', 
        border: 'none',
        borderRadius: '40px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginRight: '30px',
        marginLeft: '40px',
        height: '90px',
        width: '900px',
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
    >
      <img
        src={icon}
        alt={`${text} Icon`}
        style={{
          width: '50px',
          height: '50px',
          marginRight: '30px',
          marginLeft: '30px',
        }}
      />
      {text}
    </button>
  );
};

function Profile() {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div>
      <div style={{ display: 'grid' }}>
        {/* Back Arrow Link */}
        <a
          href="./Home"
          style={{
            position: 'absolute',
            left: '50px',
            top: '6%',
            transform: 'translateY(-50%)',
          }}
        >
          <img
            src={arrow}
            alt="Go to Products Page"
            style={{
              width: '80px',
              height: '80px',
              cursor: 'pointer',
            }}
          />
        </a>

        <h1
          style={{
            fontSize: '90px',
            fontWeight: 'bold',
            textAlign: 'left',
            marginLeft: '140px',
            marginTop: '70px',
            marginBottom: '50px',
          }}
        >
          Profile
        </h1>
        <WelcomeBanner name="Emmanuel" />

        <Button
          text="Payments"
          icon={Payment}
          onClick={() => navigate('/Cart')}
        />
        <Button
          text="Order History"
          icon={History}
          onClick={() => navigate('/History')}
        />
        <Button
          text="FAQs"
          icon={Question}
          onClick={() => navigate('/faqs')}
        />
        <Button
          text="Settings"
          icon={Settings}
          onClick={() => navigate('/settings')}
        />
        <Button
          text="Logout"
          icon={Logout}
          onClick={() => navigate('./LandingPage')}
        />

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    </div>
  );
}

export default Profile;