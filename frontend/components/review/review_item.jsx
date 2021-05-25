import React from 'react';
import * as Stars from '../business/business_rating_stars';
import {Link} from 'react-router-dom';

class ReviewItem extends React.Component {
 
  constructor(props){
    super(props);

    this.photos = this.photos.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchBusiness(this.props.review.businessId);
  // }

  photos(){
    const urls = this.props.review.photoUrls.map((url, i) => {
      return <img className="review-item-photo" key={i}src={url} alt=""/>
    });
    return urls
  }
  render(){
    if (!this.props.review) return null;
    const date = this.props.review.createdAt;
    if (!date) return null;
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const year = date.slice(0,4);
    if (this.props.page === "business") return (
      <div className="review-item-container">
        <div className="review-header-container">
          <div className="review-header-profile">
            <img src={this.props.author.photoUrl} alt=""/>
          </div>
          <div className="review-header-info">
            <Link className="review-header-link" to={`/users/${this.props.author.id}`}>
              <div className="review-header-name">{this.props.author.username}</div>
            </Link>
            <div className="review-header-location">{this.props.author.location}</div>
          </div>
        </div>
        <div className="review-rating-container">
          <img
            className="review-item-stars"
            src={Stars.IndexStar(this.props.review.rating)}
            alt=""
          />
          <div className="review-item-date">
            {month}/{day}/{year}
          </div>
        </div>
        <div className="review-body-container">{this.props.review.body}</div>
        <div className="review-photos-container">{this.photos()}</div>
      </div>
    );
    // console.log(this.props);
    if (this.props.page === "profile") return (
      <div className="profile-review-container">
        <div className="review-header-container">
          <div className="review-header-profile">
            <img src={this.props.business.photoUrls[0]} alt="" />
          </div>
          <div className="review-header-info">
            <Link
              className="review-header-link"
              to={`/businesses/${this.props.business.id}`}
            >
              <div className="review-header-name">
                {this.props.business.name}
              </div>
            </Link>
            <div className="review-header-location">
              {this.props.business.address}
            </div>
          </div>
        </div>
        <div className="review-rating-container">
          <img
            className="review-item-stars"
            src={Stars.IndexStar(this.props.review.rating)}
            alt=""
          />
          <div className="review-item-date">
            {month}/{day}/{year}
          </div>
        </div>
        <div className="review-body-container">{this.props.review.body}</div>
        <div className="review-photos-container">{this.photos()}</div>
      </div>
    );
  }
};

export default ReviewItem;