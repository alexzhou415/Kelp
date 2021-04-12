import {
  RECEIVE_BUSINESS_ERRORS,
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESSES,
  CLEAR_ERRORS,
} from "../actions/business_actions";

const businessesErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      return action.errors;
    case RECEIVE_BUSINESS:
      return [];
    case RECEIVE_BUSINESSES:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default businessesErrorsReducer;
