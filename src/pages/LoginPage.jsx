import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/loginPage.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LoginPage() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // For simplicity, assume the login is successful if the email and password are not empty.
    if (email && password) {
      // Redirect to the home page
      navigate('/home');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <>
      <div className="login-top">
        <img src="https://i.ibb.co/TLFxkhM/logo.webp" alt="logo" className="logo" />
      </div>

      <div className="d-flex justify-content-center align-items-center dark" style={{ width: '100vw' }}>
        <section className="login-box">
          <h2 className="text-white font-weight-bold sign-in">Sign In</h2>
          <form className="mt-4" id="loginForm" onSubmit={handleLogin}>
            <div className="form-group position-relative" style={{ marginBottom: '20px' }}>
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                className="form-control input-field"
                id="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // handle email change
              />
            </div>
            <div className="form-group position-relative">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                className="form-control input-field"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // handle password change
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger mt-3 sign-in-btn"
              style={{ width: '100%' }}
            >
              Sign In
            </button>

            <div className="d-flex align-items-center justify-content-center mt-3 text-white">
              <p>OR</p>
            </div>
            <button type="button" className="btn text-white alternative-sign-in" style={{ width: '100%' }}>
              Use a sign-in code
            </button>

            <div className="d-flex align-items-center justify-content-center mt-3 text-white">
              <a href="#" className="forgot-pass">
                Forgot Password?
              </a>
            </div>

            <div className="form-check mt-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label text-white small-text" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>

            <div className="d-flex mt-3 text-white">
              <p style={{ color: 'gray' }}>New to StudyFlix? &nbsp;</p>
              <a href="#" className="forgot-pass">
                Sign up Now.
              </a>
            </div>

            <div className="d-flex mt-3 text-white">
              <p className="text-white" style={{ fontSize: '12px' }}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <a href="#">Learn more.</a>
              </p>
            </div>
          </form>
        </section>
      </div>

      <footer>
        <p className="copyright-text"> © StudyFlix India</p>
      </footer>
    </>
  );
}

export default LoginPage;
