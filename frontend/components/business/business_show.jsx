import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link} from 'react-router-dom';
import logo from "../../../app/assets/images/logo_transparent.png";
import * as stars from './business_rating_stars';
import ReviewItemContainer from '../review/review_item_container';

class BusinessShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    
    this.props.fetchBusiness(this.props.match.params.businessId);
    window.scrollTo(0, 0);
  }

  reviewBar(){
    let reviewed = false;
    let reviewId;
    Object.values(this.props.reviews).forEach(review => {
      if (review.authorId === this.props.currentUserId) {
        reviewed = true;
        reviewId = review.id;
      }
    });
  
    if (reviewed) return (
      <div>
        <Link className="show-page-update-review" to={`/businesses/${this.props.business.id}/reviews/${reviewId}`}><button>Update Review</button></Link>
        <button className="show-page-delete-review" onClick={() => this.props.deleteReview(reviewId)}>Delete Review</button>
      </div>
    )
    return (
      <div>
        <Link className="show-page-create-review" to={`/businesses/${this.props.business.id}/reviews/new`}><button>Write a Review</button></Link>
      </div>
      
    )
  }
  render() { 
    
    if (!this.props.business) return null;
    let image;
    if (this.props.business.photoUrls) image = this.props.business.photoUrls.first;
    
    const reviews = Object.values(this.props.reviews).map((review) => (
      <ReviewItemContainer key={review.id} reviewId={review.id} />
    ));

    return (
      <div className="show-page-container">
        <div className="show-page-top-header">
          <div className="show-page-logo-container">
            <Link to="/" className="show-page-logo-link">
              <img className="login-logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="show-page-search">Search Bar</div>
          <div className="non-frontpage-login">
            <HeaderContainer />
          </div>
        </div>
        <div className="show-page-biz-header">
          <div className="show-page-header-photo">
            <img src={this.props.business.photoUrls} alt="" />
            <div>{image}</div>
          </div>
          <div className="show-page-header-info">
            <ul className="show-page-header-info-list">
              <li className="show-page-name">{this.props.business.name}</li>
              <li className="show-page-rating">
                <div className="show-page-stars">
                  <img
                    src={stars.ShowStar(this.props.business.averageRating)}
                    alt=""
                  />
                </div>
                <div className="show-page-review-numbers">{Object.keys(this.props.reviews).length} reviews</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="show-page-content">
          <div className="show-page-reviewbar">
            {this.reviewBar()}
          </div>
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
            <div>{reviews}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessShow;