import React from 'react';
import * as Stars from '../business/business_rating_stars';

class ReviewItem extends React.Component {
 
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    const date = this.props.review.createdAt;
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const year = date.slice(0,4);
    return (
      <div className="review-item-container">
        <div className="review-header-container">
          <div className="review-header-info">
            <div>{this.props.author.username}</div>
            <div>{this.props.author.location}</div>
          </div>
        </div>
        <div className="review-rating-container">
          <img
            className="review-item-stars"
            src={Stars.IndexStar(this.props.review.rating)}
            alt=""
          />
          <div>
            {month}-{day}-{year}
          </div>
        </div>
        <div className="review-body-container">{this.props.review.body}</div>
      </div>
    );
  }
};

export default ReviewItem;