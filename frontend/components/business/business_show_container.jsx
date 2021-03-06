import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import {fetchBusiness} from '../../actions/business_actions';
import {fetchReview, deleteReview} from '../../actions/review_actions';
import {selectReviewsForBusiness} from '../../reducers/selectors';

const mapSTP = (state, {match}) => {
  const business = state.entities.businesses[match.params.businessId];
  const reviews = state.entities.reviews;
  const currentUserId = state.session.id;
  return {
    business,
    reviews,
    currentUserId,
  }
};

const mapDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mapSTP, mapDTP)(BusinessShow);