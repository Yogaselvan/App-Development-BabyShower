import React, { useState } from 'react';
import '../assets/css/userbooking.css';
import Sidebarcus from './sidebarcus';
import NavbarMain from '../components/Navbar';
import UserNavbarMain from './usernav';

const EventTable = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Yogaselvan', eventName: 'Baby Shower', bookingDate: '2024-01-30', eventDate: '2024-02-15', headCount: 10, amount: 1000, status: 'Booked' },
    { id: 2, name: 'Vishwa', eventName: 'Baby Shower Feast', bookingDate: '2024-01-25', eventDate: '2024-02-19', headCount: 50, amount: 1500, status: 'Booked' },
    { id: 3, name: 'Srikanth', eventName: 'Baby Shower Day', bookingDate: '2024-01-31', eventDate: '2024-02-01', headCount: 80, amount: 2000, status: 'Booked' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCancel = (eventId) => {
    // Update the status to 'Cancelled' or remove the event from the list
    const updatedEvents = events.map(event => (event.id === eventId ? { ...event, status: 'Cancelled' } : event));
    setEvents(updatedEvents);
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <UserNavbarMain/>
    <Sidebarcus/>
    <div className="dis">
      <input
        type="text"
        placeholder="Search by event name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {/* Remove the 'Name' column */}
            <th>Event Name</th>
            <th>Booking Date</th>
            <th>Event Date</th>
            <th>Head Count</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id}>
              {/* Remove the 'Name' column */}
              <td>{event.eventName}</td>
              <td>{event.bookingDate}</td>
              <td>{event.eventDate}</td>
              <td>{event.headCount}</td>
              <td>{event.amount}</td>
              <td>{event.status}</td>
              <td>
                {event.status === 'Booked' && (
                  <button className="bte" onClick={() => handleCancel(event.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EventTable;