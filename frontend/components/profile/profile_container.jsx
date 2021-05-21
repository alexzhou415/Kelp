import React from 'react';
import {connect} from 'react-redux';
import Profile from './profile';
import {fetchBusinesses} from '../..//actions/business_actions';
import {fetchReview} from '../../actions/review_actions';
import {fetchUser} from '../../actions/user_actions';

const mapSTP = (state, {match}) => {
  const user = state.entities.users[match.params.userId];
  const reviews = state.entities.reviews;
  return {
    user,
    reviews,
  }
};

const mapDTP =  (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
});

export default connect(mapSTP, mapDTP)(Profile);
