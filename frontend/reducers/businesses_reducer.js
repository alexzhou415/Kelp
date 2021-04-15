import {RECEIVE_BUSINESS, RECEIVE_BUSINESSES, REMOVE_BUSINESS} from '../actions/business_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({},state);

  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      nextState[action.business.id] = action.business;
      return nextState;
    case REMOVE_BUSINESS:
      delete nextState[action.businessId]
      return nextState;
    // case RECEIVE_REVIEW:
    //   const review = action.review;
    //   nextState[review.businessId].reviewIds.push(review.id);
    //   return nextState;
    default:
      return state;
  }
};

export default businessesReducer;