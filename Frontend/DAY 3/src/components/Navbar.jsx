import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profilepage from '../pages/profile';

function NavbarMain() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can replace the following logic with your actual authentication logic
  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  return (
    <>
      <div class="landing-page44">
        <header>
          <div class="container44">
          <li><Link to='/side' className='logo' >Dashboard</Link></li>
            <ul class="links">
              <li><Link to='/' className='linkkk'>Home</Link></li>
              <li><Link to='/about' className='linkkk'>About Us</Link></li>
              <li><Link to='/events' className='linkkk'>Events</Link></li>
              {/* <li><Link to='/bookings' className='linkkk'>Bookings</Link></li> */}
              {isLoggedIn ? (
                <>
                  <li><Profilepage /></li>
                  <li><button onClick={handleLogout} className='logoutButton'>Logout</button></li>
                </>
              ) : (
                <li><Link to='/role' className='loginButton' onClick={handleLogin}>Login</Link></li>
              )}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavbarMain;
