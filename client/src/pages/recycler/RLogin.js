import logo from '../../assets/logo.png'
import React, { useState } from 'react';
import './rlogin.css'

function RLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email,
      password
    });
    // Add your login logic here
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      <img className='bgimage' src={logo} style={{ position: 'absolute', zIndex: '-1', width: '100%', height: '100%', objectFit: 'cover' }} />
      <div className="left-column"></div>
      <div className="right-column" style={{opacity: '0.8'}}>
        <div className="form-container">
          <h2 className="title">Sign in</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" id="remember" className="checkbox" />
              <label htmlFor="remember" className="label">Remember me</label>
            </div>
            <button type="submit" className="button">Sign In</button>
            <div className="link-container">
              <a href="#" className="link">Forgot password?</a>
              <a href="#" className="link">Don't have an account? Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



export default RLogin;
