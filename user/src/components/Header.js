import React from 'react'
import "../assets/header.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
      <header className="header">
        <div className="logo">CollisionMateX</div>
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <SearchIcon />     
        </div>
        <NotificationsIcon size="100" className="wifi" />
        <p>Collision & Glass Shop | Shop Id : xxxxx</p>
        <button className='header-btn'>profile Name</button>
      </header>
    );
  }

export default Header





