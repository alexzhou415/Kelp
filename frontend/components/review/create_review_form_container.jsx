import React from 'react';
import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview, clearErrors} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';

const mapSTP = (state, ownProps) => ({
  errors: state.errors.reviews,
  business: state.entities.businesses[ownProps.match.params.businessId],
  currentUserId: state.session.id,
  body: '',
  rating: 0,
});

const mapDTP = (dispatch) => ({
  submitReview: (review) => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
});

export default connect(mapSTP,mapDTP)(ReviewForm);