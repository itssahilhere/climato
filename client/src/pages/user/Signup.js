import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name_, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Changed variable name

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signup', {
        name: name_,
        email: email,
        password: password
      });
      
      console.log('Signup successful:', response.data);
      // Redirect to dashboard after successful signup
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex position-relative">
            <img
              className="bgimage"
              src={logo}
              alt="Background"
            />
            <div className="right-column position-absolute w-50 opacity-75 h-100 ms-auto end-0">
              <div className="form-container">
                <h2 className="title">Sign in</h2>
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name_}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    required
                    style={{color: 'black', fontWeight: 'bolder'}}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                    style={{color: 'black', fontWeight: 'bolder'}}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                    style={{color: 'black', fontWeight: 'bolder'}}
                  />
                  <div className="checkbox-container">
                    <input type="checkbox" id="remember" className="checkbox" />
                    <label htmlFor="remember" className="label">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="button" style={{ background: '#fff', color: 'black' }} onClick={() => navigate('/dashboard')}>Sign up</button>

                  <div className="link-container">
                    <a href="#" className="link">
                      Forgot password?
                    </a>
                    <a href="#" className="link">
                      Don't have an account? Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
