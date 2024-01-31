// AddTheme.jsx

import React, { useState } from 'react';
import '../assets/css/Addtheme.css';
import add1 from '../assets/images/About-img11.jpg';
import Sidebar11 from '../pages/sibebar1';

const AddTheme = () => {
  const [Themes, setThemes] = useState([]);
  const [newTheme, setNewTheme] = useState({
    name: '',
    capacity: '',
    ratings: '',
    availability: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (isEditing) {
      const updatedThemes = [...Themes];
      updatedThemes[editIndex] = { ...newTheme, image: add1 };
      setThemes(updatedThemes);
      setNewTheme({
        name: '',
        capacity: '',
        ratings: '',
        availability: false,
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setThemes([...Themes, { ...newTheme, image: add1 }]);
      setNewTheme({
        name: '',
        capacity: '',
        ratings: '',
        availability: false,
      });
    }
  };

  const handleEdit = (index) => {
    const themeToEdit = Themes[index];
    setNewTheme(themeToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedThemes = [...Themes];
    updatedThemes.splice(index, 1);
    setThemes(updatedThemes);
  };

  return (
    <>
    <Sidebar11/>
    <div className='center'>
    <div className="theme-app">
      <div className="add-theme-form">
        <h2>{isEditing ? 'Edit Theme' : 'Add New Theme'}</h2>
        <label>
          Theme Name:
          <input type="text" name="name" value={newTheme.name} onChange={handleChange} />
        </label>
        <label>
          Capacity:
          <input type="text" name="capacity" value={newTheme.capacity} onChange={handleChange} />
        </label>
        <label>
          Ratings:
          <input type="text" name="ratings" value={newTheme.ratings} onChange={handleChange} />
        </label>
        {/* <label>
          Availability:
          <input
            type="checkbox"
            name="availability"
            checked={newTheme.availability}
            onChange={() => setNewTheme((prevTheme) => ({ ...prevTheme, availability: !prevTheme.availability }))}
          />
        </label> */}
        <button onClick={handleAdd}>{isEditing ? 'Update Theme' : 'Add Theme'}</button>
      </div>

      <div className="theme-view">
        <h2>Theme Details</h2>
        {Themes.map((Theme, index) => (
          <div key={index} className="theme-details">
            <img src={Theme.image} alt={`${Theme.name} image`}  style={{width:700}}/>
            <p>Name: {Theme.name}</p>
            <p>Capacity: {Theme.capacity}</p>
            <p>Ratings: {Theme.ratings}</p>
            {/* <p>Availability: {Theme.availability ? 'Available' : 'Not Available'}</p> */}
            <button onClick={() => handleEdit(index)}>Edit Theme</button>
            <button onClick={() => handleDelete(index)}>Delete Theme</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default AddTheme;