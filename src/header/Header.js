import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://res.cloudinary.com/mabhi8251/image/upload/v1657696029/Gloitel-fitness/Layer_14_qeaxvc.png'
        alt='header'
      />
    </div>
  );
};

export default Header;
