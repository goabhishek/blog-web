import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sideBarTitle'>About me</span>
        <img
          src='https://res.cloudinary.com/mabhi8251/image/upload/v1657883201/Gloitel-fitness/frontpage_gnsahu.jpg'
          alt='side'
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quidem nobis nulla saepe labore nihil magnam
          beatae. Officiis quos, facere dolorem vitae quidem ad quo cum ab tempore quae veritatis.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'> Categories</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>tech</li>
          <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
      </div>
    </div>
  );
};

export default Sidebar;
