import React from 'react';
import { useNavigate } from "react-router";
import '../assets/css/Eventpage.css';
import NavbarMain from '../components/Navbar';

export default function Eventpage() {
  const navigate= useNavigate()
const hello= ()=>{
   navigate('/userbookings')
}
  return (
    <>
    <NavbarMain/>
    <div>
      <h1 className='yoga22'>BookEvents</h1>
      <div className="card-group">
        <div className="card">
          <img src="https://img.freepik.com/free-photo/candy-bar_144627-16852.jpg?w=826&t=st=1706070492~exp=1706071092~hmac=42a65a5c5d936cca0d15eedf7c8b2b85a2a75421ab69ccd07beee621ce290c9f" className="card-img-top" alt="..." style={{ height: '400px', width: '372px' }} />
          <div className="card-body">
            <h5 className="card-title">Baby Shower Fest</h5>
            <p className="card-text"> Feel free to adapt it to suit the tone and style you prefer. Congratulations on this special occasion!</p>
            <p className="card-text"><small className="text-muted"><button className='button-27' onClick={hello}>Book</button></small></p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/candy-bar_144627-16852.jpg?w=826&t=st=1706070492~exp=1706071092~hmac=42a65a5c5d936cca0d15eedf7c8b2b85a2a75421ab69ccd07beee621ce290c9f" className="card-img-top" alt="Baby Showering Event" style={{ height: '400px', width: '372px' }} />
          <div className="card-body">
            <h5 className="card-title">Baby Showering Day</h5>
            <p className="card-text">Happy Baby Shower Day! 🍼✨ Today is all about celebrating the beautiful journey you're embarking on as parents.</p>
            <p className="card-text"><small className="text-muted"><button className='button-27' onClick={hello}>Book</button></small></p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/candy-bar_144627-16852.jpg?w=826&t=st=1706070492~exp=1706071092~hmac=42a65a5c5d936cca0d15eedf7c8b2b85a2a75421ab69ccd07beee621ce290c9f" className="card-img-top" alt="Baby Showering Event" style={{ height: '400px', width: '372px' }} />
          <div className="card-body">
            <h5 className="card-title">Baby Showering Event</h5>
            <p className="card-text">Join us in celebrating the upcoming arrival of joy!. Your presence will make it even more special!"</p>
            <p className="card-text"><small className="text-muted"><button className='button-27' onClick={hello}>Book</button></small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
