import React from 'react';
import '../assets/css/BookingDetails1.css'
import { useNavigate } from 'react-router';
import Sidebar11 from './sibebar1';
import NavbarMain from '../components/Navbar';

const BookingDetailsForm1 = () => {
  const navigate =useNavigate();
    const hello =() =>{
        navigate('/bookings')
    }
    const hello1 =() =>{
      navigate('/')
  }
  return (
    <>
    <NavbarMain/>
    <Sidebar11/>
    <div className='body222'>
    <div className="container999">
      <div className="title11">FOOD DETAILS</div>
      <form action="#">
        <div className="user__details">
        <div className="input__box">
        <span className="details">Food Details</span>
          <select className='input___box'  required>
            <option value="" disabled>Select Food</option>
            <option value="Veg">Veg Food</option>
            <option value="Non Veg">Non Veg Food</option>
            <option value="Both">Both</option>
          </select>
        <div/> 
        </div>
        <div className="input__box">
        <span className="details"> Select Add ons</span>
          <select className='input___box'  required>
            <option input type="checkbox">Magic Show</option>
            <option input type="checkbox">DJ Party</option>
            <option input type="checkbox">Game Show</option>
            <option input type="checkbox">Mehandi</option>
          </select>
        <div/> 
          </div>
          <div className="input__box">
            <span className="details">Enter Quality of Veg Items</span>
            <input type="text" placeholder="Veg Food Count" />
          </div>
          <div className="input__box">
            <span className="details">Enter Special Guest Name</span>
            <input type="text" placeholder="Special Guest Name" />
          </div>
          <div className="input__box">
            <span className="details">Enter Quality of Non Veg Items</span>
            <input type="text" placeholder="Non Veg Food Count"/>
          </div>
        </div>
        <button className="button33">
          <input type="submit" value="Book the Event" />
        </button>
        <div className='vasa1'>
          <button  className='button-13' onClick={hello}>1</button>
          <button className='button-13'>2</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default BookingDetailsForm1;
