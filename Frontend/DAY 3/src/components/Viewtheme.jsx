import React from 'react';
import Sidebar11 from '../pages/sibebar1';
import '../App.css';
import Card1 from '../components/card.jsx';

const cardDataArray = [
  {
    id: 1,
    imageSrc: 'https://images.pexels.com/photos/3593437/pexels-photo-3593437.jpeg?cs=srgb&dl=pexels-paola-vasquez-3593437.jpg&fm=jpg',
    title: 'Baby Showering Feast',
    description: 'Join us in celebrating the upcoming arrival of joy!. Your presence will make it even more special!',
    price: 'Rs.1400',
  },
  {
    id: 2,
    imageSrc: 'https://images.pexels.com/photos/3593437/pexels-photo-3593437.jpeg?cs=srgb&dl=pexels-paola-vasquez-3593437.jpg&fm=jpg',
    title: 'Baby Showering Day',
    description: 'Feel free to adapt it to suit the tone and style you prefer. Congratulations on this special occasion!',
    price: 'Rs. 2000',
  },
  {
    id: 3,
    imageSrc: 'https://images.pexels.com/photos/3593437/pexels-photo-3593437.jpeg?cs=srgb&dl=pexels-paola-vasquez-3593437.jpg&fm=jpg',
    title: 'Baby Showering Event',
    description: 'Happy Baby Shower Day! 🍼✨ Today is all about celebrating the beautiful journey you\'re embarking on as parents.',
    price: 'Rs.2500',
  },
];

const Viewtheme = () => {
  return (
    <>
      <Sidebar11 />
      <div className='yuvan' style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        {cardDataArray.map((cardData) => (
            <Card1 cardData= {cardData}/>
        ))}
        <button >+Add Theme</button>
      </div>
      <button className='button-2' >+Add Theme</button>
    </>
  );
};

export default Viewtheme;
