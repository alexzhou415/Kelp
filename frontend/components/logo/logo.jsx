import React from 'react';
import logo from '../../../app/assets/images/logo_transparent.png';
import {Link} from 'react-router-dom';
const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link">
        <img className="root-logo" src={logo} alt=""/>
      </Link>
    </div>
  )
};

export default Logo;