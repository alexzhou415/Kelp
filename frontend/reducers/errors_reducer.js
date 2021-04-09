import sessionErrorsReducer from './session_errors_reducer';
import {combineReducers} from 'redux';
import businessesErrorsReducer from './businesses_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  businesses: businessesErrorsReducer
});

export default errorsReducer;
