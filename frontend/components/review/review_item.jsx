import React from 'react';
import * as Stars from '../business/business_rating_stars';

class ReviewItem extends React.Component {
 
  constructor(props){
    super(props);
  }

  photos(){
    const urls = this.props.review.photoUrls.map((url, i) => {
      return <img key={i}src={url} alt=""/>
    });
    return urls
  }
  render(){
    if (!this.props.review) return null;
    const date = this.props.review.createdAt;
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const year = date.slice(0,4);
    return (
      <div className="review-item-container">
        <div className="review-header-container">
          <div className="review-header-profile"></div>
          <div className="review-header-info">
            <div className="review-header-name">{this.props.author.username}</div>
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
  }
};

export default ReviewItem;