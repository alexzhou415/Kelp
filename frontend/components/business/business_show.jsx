import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link} from 'react-router-dom';
import logo from "../../../app/assets/images/logo_transparent.png";

class BusinessShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render() { 
    console.log(this.props);
    if (!this.props.business) return null;
    return (
      <div className="show-page-container">
        <div className="show-page-top-header">
          <Link to="/" className="show-page-logo-link">
            <img className="login-logo" src={logo} alt="" />
          </Link>
          <HeaderContainer />
        </div>
        <div className="show-page-biz-header">
          <div className="show-page-header-photo"></div>
          <div className="show-page-header-info">
            <ul className="show-page-header-info-list">
              <li className="show-page-name">{this.props.business.name}</li>
              <li className="show-page-rating">
                <div className="show-page-">{this.props.business.rating}</div>  
              </li>
            </ul>
          </div>
        </div>
        <div className="show-page-reviewbar"></div>
        <div className="show-page-map">
          <div className="show-page-location-header">Location</div>
          <div className="show-page-address">{this.props.business.address}</div>
        </div>
        <div className="show-page-questions"></div>
        <div className="show-page-reviews">
          <div className="recommended-reviews">Recommended Reviews</div>
        </div>
      </div>
    );
  }
}

export default BusinessShow;