import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignUpForm() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, password, agree });
  };
  
  
  
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' , marginTop: '10pc'}}>
      <h2>Create Account</h2>
      <p style={{marginBottom: '10px'}}>Fill your information below</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px'}}>
          <label></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Full Name"
            style={{ width: '100%', padding: '10px', fontSize: '16px', border: '2px solid #d0430e' , borderRadius: '20px'}}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            style={{ width: '100%', padding: '10px', fontSize: '16px' ,border: '2px solid #d0430e' , borderRadius: '20px'}}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            style={{ width: '100%', padding: '10px', fontSize: '16px' ,border: '2px solid #d0430e' , borderRadius: '20px'}}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span style={{ marginLeft: '8px'}}>Agree with Terms & Condition</span>
          </label>
        </div>
        <button
          type="submit"
          onClick={goToLogin}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#d0430e',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
          }}
          disabled={!agree}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;