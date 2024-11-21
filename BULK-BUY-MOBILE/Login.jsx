import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const forgotPassword = () => {
    navigate('/Forgot');
  };
  const goToHome = () => {
    navigate('/Home')
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' , marginTop: '13pc'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{ width: '100%', padding: '10px', fontSize: '16px' ,border: '2px solid #d0430e' , borderRadius: '20px'}}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: '2px solid #d0430e' , borderRadius: '20px',width: '100%', padding: '10px', fontSize: '16px', }}
          />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'right' }}>
          <a 
          href="/Forgot" 
          onClick={forgotPassword} 
          style={{ color: '#d0430e' }}
          >
            Forgot Password?
            </a>
        </div>
        <button
          type="submit"
          onClick={goToHome}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#d0430e',
            color: 'white',
            fontSize: '16px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;