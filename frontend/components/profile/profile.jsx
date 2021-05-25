import React from 'react';
import { Link } from "react-router-dom";
import ReviewItemContainer from "../review/review_item_container";
import HeaderContainer from "../header/header_container";
import logo from "../../../app/assets/images/logo_transparent.png";
import Search from "../search/search";

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    // this.props.fetchBusinesses();
    // console.log("mounted");
  }

  render(){
    // console.log("profile");
    // console.log(this.props);
    if (!this.props.user) return null;
    const reviews = Object.values(this.props.reviews).map((review) => (
      <ReviewItemContainer key={review.id} page="profile" reviewId={review.id} business={this.props.businesses[review.businessId]}/>
    ));
    return (
      <div className="profile-container">
        <div className="show-page-top-header">
          <div className="show-page-logo-container">
            <Link to="/" className="show-page-logo-link">
              <img className="login-logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="show-page-search">
            <Search />
          </div>
          <div className="non-frontpage-login">
            <HeaderContainer />
          </div>
        </div>
        <div className="profile-header">
          <div className="profile-banner"></div>
          <div className="profile-header-content">
            <div className="profile-pic">
              <img src={this.props.user.photoUrl} alt="" />
            </div>
            <div className="profile-info">
              <div className="profile-username">{this.props.user.username}</div>
              <div className="profile-location">From {this.props.user.location}</div>
            </div>
          </div>
        </div>
        <div className="profile-reviews">
          <div className="profile-blankspace"></div>
          <div className="profile-review-content">
            <div className="profile-review-header">Reviews</div>
            <div className="profile-review-items">{reviews}</div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Profile;