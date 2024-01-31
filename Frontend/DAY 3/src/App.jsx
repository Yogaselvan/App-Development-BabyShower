import { useState } from 'react'
import AdminLoginPage from './pages/Adminlogin'
import CustomerLoginPage from './pages/Customerlogin'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Eventpage from './pages/Eventpage'
import BookingDetailsForm from './pages/BookingDetails'
import BookingDetailsForm1 from './pages/BookingDetails1'
import NavbarMain from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './pages/About'
import Contactpage from './pages/Contactpage'
import Profilepage from './pages/profile'
import Sidebar from './pages/sibebar1'
import Dashboard from './components/sidebar'
import Sidebar11 from './pages/sibebar1'
import Viewtheme from './components/Viewtheme'
import Form from './components/form'
import AddTheme from './components/Addtheme'
import UserBookingDetails from './pages/userbook'
import UserBookingDetails1 from './pages/userbook2'
import CustomerDashboard from './pages/CustomerDash'
import EventTable from './pages/userbooking'
import UserNavbarMain from './pages/usernav'
import Role from './pages/role'
import UserDashboard from './pages/userdashboard'


function App() {
  return (
    <>
    <Router>
    
        <Routes>
          <Route path='/' element ={<Homepage/>}/>
          <Route path='/about' element ={<Aboutpage/>}/>
          <Route path='/events' element ={<Eventpage/>}/>
          <Route path='/bookings' element ={<BookingDetailsForm/>}/>
          <Route path='/bookings1' element ={<BookingDetailsForm1/>}/>
          <Route path='/profile' element ={<Profilepage/>}/>
          <Route path='/login' element ={<CustomerLoginPage/>}/>
          <Route path='/admin' element ={<AdminLoginPage/>}/>
          <Route path='/dash' element ={<Sidebar11/>}/>
          <Route path='/contact' element ={<Contactpage/>}/>
          <Route path='/side' element ={<Dashboard/>}/>
          <Route path='/view' element ={<Viewtheme/>}/>
          <Route path='/addtheme' element ={<AddTheme/>}/>
          <Route path='/userbookings' element ={<UserBookingDetails/>}/>
          <Route path='/userbookings1' element ={<UserBookingDetails1/>}/>
          <Route path='/userdas' element ={<CustomerDashboard/>}/>
          <Route path='/userviewbooking' element ={<EventTable/>}/>
          <Route path='/usernav' element ={<UserNavbarMain/>}/>
          <Route path='/role' element ={<Role/>}/>
          <Route path='/userdash' element ={<UserDashboard/>}/>
         </Routes>
     </Router>  
    </>
  )
}

export default App
