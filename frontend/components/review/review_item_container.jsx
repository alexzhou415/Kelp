import React from "react";
import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchReview } from "../../actions/review_actions";

const mapSTP = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.reviewId],
});

const mapDTP = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
});

export default connect(mapSTP, mapDTP)(ReviewItem);
