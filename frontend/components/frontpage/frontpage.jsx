import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link} from 'react-router-dom';

import logo from "../../../app/assets/images/logo_transparent.png";
class FrontPage extends React.Component {


  render(){
    return (
      <div className="splash-container">
        <div className="header-box">
          <HeaderContainer />
        </div>
        <div className="splash-logo-container">
          <Link to="/" className="splash-logo-link">
            <img className="splash-logo" src={logo} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}

export default FrontPage;