import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import {fetchBusiness} from '../../actions/business_actions';
import {fetchReview} from '../../actions/review_actions';


const mapSTP = (state, {match}) => {
  const business = state.entities.businesses[match.params.businessId] || {reviewIds: []};
  const reviewIds = business.reviewIds;
  const reviews = reviewIds.map((id) => state.entities.reviews[id]);
  return {
    business,
    reviewIds,
  }
};

const mapDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
});

export default connect(mapSTP, mapDTP)(BusinessShow);