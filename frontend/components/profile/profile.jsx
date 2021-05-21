import React from 'react';
import { Link } from "react-router-dom";
import ReviewItemContainer from "../review/review_item_container";

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    console.log("mounted");
  }

  render(){
    // console.log("profile");
    // console.log(this.props);
    if (!this.props.user) return null;
    const reviews = Object.values(this.props.reviews).map((review) => (
      <ReviewItemContainer key={review.id} page="profile" reviewId={review.id} />
    ));
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-username">{this.props.user.username}</div>
          <div className="profile-location">{this.props.user.location}</div>
        </div>
        <div className="profile-reviews">
          <div className="profile-review-header">Reviews</div>
          {reviews}
        </div>
      </div>
    );
  }
  
}

export default Profile;