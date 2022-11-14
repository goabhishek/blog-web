import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-instagram'></i>
        <i className='topIcon fa-brands fa-pinterest'></i>
        <i className='topIcon fa-brands fa-twitter'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg'
          src='https://res.cloudinary.com/mabhi8251/image/upload/v1661603684/Gloitel-fitness/carrer-1st_opfhvd.png'
          alt='logo'
        />
        <i className='topSearchIcon fas fa-search'> </i>
      </div>
    </div>
  );
};

export default Topbar;
