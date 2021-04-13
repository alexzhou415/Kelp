import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveUser = (userId) => (dispatch) =>
  SessionAPIUtil.fetchUser(userId).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveUserErrors(errors.responseJSON))
  );

