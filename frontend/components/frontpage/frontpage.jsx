import React from 'react';
import HeaderContainer from '../header/header_container';
import BusinessIndexContainer from '../business/business_index_container';
import {Link} from 'react-router-dom';

import logo from "../../../app/assets/images/logo_transparent.png";
import splash from "../../../app/assets/images/krabby_patties.png";
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
          <div className="splash-image-container">
            <img
              className="splash-image"
              src="https://kelp-seeds.s3-us-west-1.amazonaws.com/krabby_patties.png"
              alt=""
            />
          </div>
        </div>
        <div className="frontpage-business-index">
          <BusinessIndexContainer type="frontpage"/>
        </div>
      </div>
    );
  }
}

export default FrontPage;