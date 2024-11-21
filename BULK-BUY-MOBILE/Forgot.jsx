import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log({ email });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '220px', padding: '20px'}}>
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{ width: '100%', padding: '10px', fontSize: '16px',  border: '2px solid #d0430e' , borderRadius: '20px'}}
          />
        </div>
        <button
          type="submit"
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
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;