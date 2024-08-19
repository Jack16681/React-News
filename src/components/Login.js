import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ mode, onLoginSuccess }) => {
  // Inline styles for the component
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212', // Dynamic background color
    margin: 0, // Ensure no extra margin on body
    overflow: 'hidden', // Prevent scrolling
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '500px', // Increased size
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    padding: '2.5rem',
    backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e', // Dynamic card background
    color: mode === 'light' ? '#333' : '#ffffff', // Dynamic text color
  };

  const titleStyle = {
    fontSize: '28px',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const buttonIconStyle = {
    marginRight: '8px',
  };

  const socialButtonStyle = {
    borderRadius: '50%',
    fontSize: '20px',
    color: '#ffffff',
    backgroundColor: mode === 'light' ? '#333' : '#555', // Dynamic background for social buttons
    border: 'none',
  };

  const linkStyle = {
    color: mode === 'light' ? '#007bff' : '#bb86fc', // Dynamic link color
    textDecoration: 'none',
  };

  // Class names for input fields
  const inputClass = `form-control ${mode === 'light' ? 'light-mode-input' : 'dark-mode-input'}`;

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the onLoginSuccess callback to update the state in App.js
    onLoginSuccess();
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" id="email" className={inputClass} placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className={inputClass} placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="checkbox" id="rememberMe" className="form-check-input" />
            <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Log In</button>
        </form>
        <div className="text-center mb-3">or login with</div>
        <div className="d-flex justify-content-between">
          <button className="btn" style={socialButtonStyle} aria-label="Login with Facebook">
            <FaFacebook style={buttonIconStyle} />
          </button>
          <button className="btn" style={socialButtonStyle} aria-label="Login with Google">
            <FaGoogle style={buttonIconStyle} />
          </button>
          <button className="btn" style={socialButtonStyle} aria-label="Login with Twitter">
            <FaTwitter style={buttonIconStyle} />
          </button>
        </div>
        <div className="text-center mt-3">
          <Link to="/signup" style={linkStyle}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
