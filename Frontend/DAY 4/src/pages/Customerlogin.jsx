import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Customerlogin.css';
import { useNavigate } from 'react-router';
import NavbarMain from '../components/Navbar';

const CustomerLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formHeight, setFormHeight] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFormHeight(formRef.current.offsetHeight);
  }, [isSignUp]);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const hello = () => {
    navigate('/');
  };
  const hello1 = () => {
    navigate('/userdas');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validations
    const isValidMobileNumber = /^[1-9][0-9]{9}$/.test(mobileNumber);
    const isValidPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if (isSignUp && !isValidMobileNumber) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    if (isSignUp && !isValidPassword) {
      alert(
        'Password must be at least 8 characters long and contain at least 1 special character and 1 digit'
      );
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Continue with form submission logic
    // ...

    // For example, navigate to another page
    navigate('/another-page');
  };

  return (
    <>
    <NavbarMain/>
    <div className='Customer'>
      <div className='yoga3'>
        <div className={`container ${isSignUp ? 'active' : ''}`} id="container" style={{ height: formHeight }}>
          <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`} ref={formRef}>
            <form onSubmit={handleSubmit}>
              <h1 className="h1">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              {isSignUp && <span>or use your email for registration</span>}
              {isSignUp && <input type="text" placeholder="Name" required />}
              <input type="email" placeholder="Email" required />
              {isSignUp && (
                <>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    pattern="[1-9][0-9]{9}"
                    title="Please enter a valid 10-digit mobile number"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <button type="submit">Sign Up</button>
                </>
              )}
              {!isSignUp && (
                <>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button type="submit" onClick={hello1}>Sign In</button>
                </>
              )}
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
                <h1 className='h1'>{isSignUp ? 'Welcome Back!' : 'Welcome, Friend!'}</h1>
                <p>Enter your personal details to use all of the site features</p>
                <button className="hidden" onClick={toggleForm}>
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
                <button onClick={toggleForm}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomerLoginPage;
