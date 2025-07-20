import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password } = form;

    if (name && email && password) {
      localStorage.setItem('user', JSON.stringify(form));
      localStorage.setItem('loggedIn', 'true');

      alert('Signup successful! Redirecting...');
      navigate('/');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={formContainer}>
        <h2 style={titleStyle}>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Signup</button>
        </form>
        <p style={textStyle}>
          Already have an account?{' '}
          <Link to="/login" style={linkStyle}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

// 💅 Reusable styles
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

export default Signup;
