import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const PCard = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const handleOrderNow = () => {
    navigate('/products'); // Replace '/product-page' with your product page route
  };

  return (
    <div style={styles.card}>
      <div style={styles.textContainer}>
        <h3 style={styles.title}>Bag of Beans | Bag of Wheat</h3>
        <p style={styles.discount}>Discount 25%</p>
        <button style={styles.button} onClick={handleOrderNow}>
          Order Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2A900', // Adjust based on your yellow color
    padding: '16px',
    borderRadius: '20px',
    color: '#fff',
    width: '800px',
    height: '250px',
    margin: '20px auto',
    marginLeft: '58px',
    position: 'relative',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  title: {
    margin: 0,
    marginLeft: '25px',
    fontSize: '50px',
    fontWeight: 'bold',
  },
  discount: {
    margin: '0',
    marginLeft: '25px', // Match the h3's left margin
    fontSize: '30px',
    alignSelf: 'flex-start', // Aligns the discount to the left like the h3 tag
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#D32F2F', // Red button color
    color: '#fff',
    border: 'none',
    marginLeft: '25px',
    width: '150px',
    height: '70px',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '22px',
    fontWeight: 'bold',
  },
};

export default PCard;