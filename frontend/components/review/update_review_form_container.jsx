import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { updateReview, clearErrors , fetchReview} from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mapSTP = (state, ownProps) => {
  const currentUserId = state.session.id;
  

  return {
    errors: state.errors.reviews,
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUserId,
    body: state.entities.reviews[ownProps.match.params.reviewId],//.body,
    rating: state.entities.reviews[ownProps.match.params.reviewId]//.rating,
  };
};

const mapDTP = (dispatch) => ({
  submitReview: (review) => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearErrors()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
});

export default connect(mapSTP, mapDTP)(ReviewForm);
