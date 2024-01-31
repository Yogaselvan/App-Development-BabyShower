import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Adminlogin.css';
import { useNavigate } from 'react-router';
import NavbarMain from '../components/Navbar';

const AdminLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate =useNavigate();
    const hello =() =>{
        navigate('/side')
    }

  return (
    <>
    <NavbarMain/>
    <div className='Admin'>
      <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
        <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
          <form>
            <h1 className="h1">Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email to sign in</span>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required />
            <button onClick={hello}>Sign In</button>
            
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
              <h1 className='h1'>Welcome, Friend!</h1>
              <p>Enter your credentials to access site features</p>
              {/* <button className="hidden" onClick={() => setIsSignUp(!isSignUp)}>
                Sign Up
              </button> */}
              {/* <button >  Sign Up</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLoginPage;
