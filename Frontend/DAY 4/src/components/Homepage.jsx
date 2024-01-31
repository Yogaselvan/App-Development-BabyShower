import '../assets/css/Navbar.css'
import Timeline from '../pages/Timeline';
import NavbarMain from './Navbar';
function Homepage() {
    return ( 
        <>
        <NavbarMain/>
        <div className='sab ' style={{overflowY:'auto'}}>
          <div className="landing-page44">
        <div className="content44" style={{overflowY:'auto'}}>
          <div className="container44">
            <div className="info44">
              <h1 >Looking forward to the Baby Shower celebration</h1>
              <p >Welcome to the Baby Shower Event Online! I'm so glad you could all come to help us celebrate the arrival of this new little boy or girl. You are going to make fantastic parents.</p>
              <button>Get Started</button>
            </div>
            <div className="image44">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
            </div>
          </div>
        </div>
      </div>
      <Timeline/>
      </div>
        </>
     );
}

export default Homepage;