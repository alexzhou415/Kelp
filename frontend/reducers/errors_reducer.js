import sessionErrorsReducer from './session_errors_reducer';
import {combineReducers} from 'redux';
import businessesErrorsReducer from './businesses_errors_reducer';
import reviewsErrorsReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  businesses: businessesErrorsReducer,
  reviews: reviewsErrorsReducer,
});

export default errorsReducer;
