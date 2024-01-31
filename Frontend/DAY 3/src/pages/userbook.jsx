import React from 'react';
import '../assets/css/BookingDetails.css'
import { useNavigate } from 'react-router';
import Sidebar11 from './sibebar1';
import UserDashboard from './userdashboard';
import UserNavbarMain from './usernav';
const UserBookingDetails= () => {
    const navigate =useNavigate();
    const hello =() =>{
        navigate('/userbookings1')
    }
  return (
    <>
     
    <UserNavbarMain/>
    <div className='body22'>
    <div className="container99">
      <div className="title1">BOOKING DETAILS</div>
      <form action="#">
        <div className="user__details">
          <div className="input__box">
            <span className="details">Event Name</span>
            <input type="text" placeholder="E.g: Baby Fest" required />
          </div>
          <div className="input__box">
            <span className="details">Enter Applicant Form</span>
            <input type="text" placeholder="Yogaselvan" required />
          </div>
          <div className="input__box">
            <span className="details">Enter Applicant Email</span>
            <input type="email" placeholder="yogaselvan@gmail.com" required />
          </div>
          <div className="input__box">
            <span className="details">Phone Number</span>
            <input
            //   type="tel"
            //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="012-345-6789"
               
            />
          </div>
          <div className="input__box">
            <span className="details">Enter Applicant Address</span>
            <input type="text" placeholder="Address" required />
          </div>
          <div className="input__box">
            <span className="details">Enter Date Of Event</span>
            <input type="date" placeholder="Event Date" required />
          </div>
          <div className="input__box">
            <span className="details">Enter the Time Of the Event</span>
            <input type="time" placeholder="Event Time" required />
          </div>
          <div className="input__box">
            <span className="details">Enter Number of People</span>
            <input type="text" placeholder="People Count" required />
          </div>
        </div>
        <div className="gender__details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender__title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one"></span>
              <span>Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two"></span>
              <span>Female</span>
            </label>
          </div>
        </div>
        <div >
            <button className="button33" onClick = {hello}>Next Page</button>
        </div>
      </form>
    </div>
    </div>
    </>

  );
};

export default UserBookingDetails
