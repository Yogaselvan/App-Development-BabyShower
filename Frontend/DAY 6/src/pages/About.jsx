import React from 'react';
import '../assets/css/Aboutpage.css'
import img1 from '../assets/images/About-img11.jpg'
import img2 from '../assets/images/About-img2.jpg'
import { useNavigate } from 'react-router';
import NavbarMain from '../components/Navbar';
const AboutPage = () => {
    const navigate =useNavigate();
    const hello =() =>{
        navigate('/contact')
    }
    return (
        <>
        <NavbarMain/>
        <div className='section'>
        <section className="about-section" >
            <div className="container777">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title777">
                                <span className="title777">About Us</span>
                                <h2>Welcome to Our Website <br />Celebrating Little Ones Always</h2>
                            </div>
                            <div className="text">Welcome to Baby Shower Wonderland, your one-stop destination for creating magical moments for little ones and expecting parents. Since our establishment in 2024, we've been dedicated to curating the finest selection of baby shower essentials that bring joy and warmth to every celebration.</div>
                            <ul className="list-style-one">
                                <li>Adorable Essentials for Every Celebration</li>
                                <li>Memorable Gifts for New Beginnings</li>
                                <li>Cherish Joyful Baby Moments</li>
                            </ul>
                            <div className="btn-box">
                                <a href="#" className="theme-btn btn-style-one" onClick={hello}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img1} style={{height:550,width:500}} alt="" /></a></figure>
                            <figure className="image-2"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img2} style={{height:350, width:350}} alt="" /></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};

export default AboutPage;
