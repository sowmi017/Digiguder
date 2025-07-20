import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/'); // Redirect to home after login
    } else {
      alert('Please enter valid email and password');
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={formContainer}>
        <h2 style={titleStyle}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={textStyle}>
          Don't have an account?{' '}
          <Link to="/signup" style={linkStyle}>Signup here</Link>
        </p>
      </div>
    </div>
  );
};

// ✨ Styles
const wrapperStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to bottom right, #f3d9ff, #ffe0f0)',
  padding: '2rem',
};

const formContainer = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
};

const titleStyle = {
  marginBottom: '1.5rem',
  color: '#6a0572',
  fontSize: '1.8rem',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#6a0572',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.3s',
};

const textStyle = {
  marginTop: '1rem',
  fontSize: '0.95rem',
};

const linkStyle = {
  color: '#9d4edd',
  fontWeight: 'bold',
  textDecoration: 'none',
};

export default Login;
