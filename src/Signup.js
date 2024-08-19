import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ mode }) => {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
    margin: 0,
    overflow: 'hidden',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    padding: '2.5rem',
    backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
    color: mode === 'light' ? '#333' : '#ffffff',
  };

  const titleStyle = {
    fontSize: '28px',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const inputClass = `form-control ${mode === 'light' ? 'light-mode-input' : 'dark-mode-input'}`;

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate a successful sign-up and redirect to login page
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className={inputClass} placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" id="email" className={inputClass} placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className={inputClass} placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <a href="#" onClick={() => navigate('/')} style={{ color: mode === 'light' ? '#007bff' : '#bb86fc', textDecoration: 'none' }}>Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
