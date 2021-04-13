import React from 'react';

class ReviewItem extends React.Component {
 
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchReview(this.props.reviewId);
  }
  render(){
    // console.log(this.props);
    if (!this.props.review) return null;
    return (
      
      <div className="review-item-container">
        {this.props.review.body}
      </div>
    )
  }
};

export default ReviewItem;