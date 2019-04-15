import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <p className="Nav_p"
        onClick={() => {console.log('Signed Out btn clicked')}}>Sign Out</p>
    </nav>
  );
}

export default Nav;
