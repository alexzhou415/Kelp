import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const oldState = { id: null };
const sessionReducer = (state = oldState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      // console.log(action);
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return state;
  }
};

export default sessionReducer;
