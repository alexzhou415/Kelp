import React from "react";
import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchReview } from "../../actions/review_actions";
import {fetchUser} from "../../actions/user_actions";

const mapSTP = (state, ownProps) => {
  const review = state.entities.reviews[ownProps.reviewId]; 
  // const rating = state.entities.businesses[review.businessId].rating;
  const author = state.entities.users[review.authorId];
  return {
    review,
    author,
  }
};

const mapDTP = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapSTP, mapDTP)(ReviewItem);
