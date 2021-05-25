import React from "react";
import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchReview } from "../../actions/review_actions";
import {fetchUser} from "../../actions/user_actions";
import {fetchBusiness} from "../../actions/business_actions";

const mapSTP = (state, ownProps) => {
  const review = state.entities.reviews[ownProps.reviewId]; 
  // const rating = state.entities.businesses[review.businessId].rating;
  const author = state.entities.users[review.authorId];
  let business;
  if (ownProps.business) business = state.entities.businesses[review.businessId];
  return {
    review,
    author,
    business,
  }
};

const mapDTP = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  // fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
});

export default connect(mapSTP, mapDTP)(ReviewItem);
