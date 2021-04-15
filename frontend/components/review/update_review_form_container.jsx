import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { updateReview, clearErrors} from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import {fetchReview} from "../../util/review_api_util";

const mapSTP = (state, ownProps) => {
  const currentUserId = state.session.id;
  

  return {
    errors: state.errors.reviews,
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUserId,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    // body: state.entities.reviews[ownProps.match.params.reviewId].body,
    // rating: state.entities.reviews[ownProps.match.params.reviewId].rating,
  };
};

const mapDTP = (dispatch) => ({
  submitReview: (review, id) => dispatch(updateReview(review, id)),
  clearErrors: () => dispatch(clearErrors()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReview: (reviewId) => fetchReview(reviewId),
});

export default connect(mapSTP, mapDTP)(ReviewForm);
