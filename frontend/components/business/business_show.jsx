import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link} from 'react-router-dom';
import logo from "../../../app/assets/images/logo_transparent.png";
import * as stars from './business_rating_stars';

class BusinessShow extends React.Component {

  constructor(props) {
    super(props);

    // this.numStars = this.numStars.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
    window.scrollTo(0, 0);
  }

  // numStars(){
  //   let numStars;
  //   // if (!this.props.business)
  //   if (this.props.business.rating < 1) return stars.
  // }
  render() { 
    
    if (!this.props.business) return null;
    let image;
    if (this.props.business.photoUrl) image = this.props.business.photoUrl;
    
    return (
      <div className="show-page-container">
        <div className="show-page-top-header">
          <Link to="/" className="show-page-logo-link">
            <img className="login-logo" src={logo} alt="" />
          </Link>
          <div className="show-page-search">Search Bar</div>
          <div className="non-frontpage-login">
            <HeaderContainer />
          </div>
        </div>
        <div className="show-page-biz-header">
          <div className="show-page-header-photo">
            <img src={image} alt="" />
          </div>
          <div className="show-page-header-info">
            <ul className="show-page-header-info-list">
              <li className="show-page-name">{this.props.business.name}</li>
              <li className="show-page-rating">
                <div className="show-page-stars">
                  <img
                    src={stars.ShowStar(this.props.business.rating)}
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="show-page-content">
          <div className="show-page-reviewbar"></div>
          <div className="show-page-location-container">
            <div className="show-page-map"></div>
            <div className="show-page-location-header">Location</div>
            <div className="show-page-address">
              {this.props.business.address}
            </div>
          </div>

          <div className="show-page-questions"></div>
          <div className="show-page-reviews">
            <div className="recommended-reviews">Recommended Reviews</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessShow;