import React from 'react';
import Nav from './Nav'
import '../styles/header.css'
const Header = () => {
  return (
    <div className='header-main'>
      <h2 className='app-title'>NoteWorthy</h2>
      <Nav />
    </div>
  );
};

export default Header;