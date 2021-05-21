import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_BUSINESS} from '../actions/business_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const reviewsReducer =(state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({},state);

  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.reviews);
    case RECEIVE_USER:
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;