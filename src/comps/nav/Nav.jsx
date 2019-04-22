import React from 'react';
import './Nav.css';

const Nav = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="Nav">
        <p className="Nav_p"
          onClick={() => onRouteChange('signin')}>Sign Out</p>
      </nav>
    )
  } else {
      return (
      <nav className="Nav">
        <p className="Nav_p"
          onClick={() => onRouteChange('signin')}>Sign In</p>
        <p className="Nav_p"
          onClick={() => onRouteChange('register')}>Register</p>
      </nav>
    )
  }
}

export default Nav;
