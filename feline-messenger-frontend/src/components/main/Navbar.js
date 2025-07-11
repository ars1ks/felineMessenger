import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <button className="toggle-btn">
          <img src="/img/icons/menu.png" alt="Menu" />
        </button>
        <img src="/img/logo.png" alt="Logo" className="main-logo" />
      </div>

      <div className="nav-right">
        <form className="search-bar">
          <i className='bx bx-search' style={{color: '#ffffff'}}></i>
          <input type="text" placeholder="Поиск" className="input" />
        </form>

        <a href="#" className="user">
          <i className='bx bx-user' style={{color: '#ffffff'}}></i>
        </a>

        <a href="#">
          <i className='bx bx-cog' style={{color: '#ffffff'}}></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;