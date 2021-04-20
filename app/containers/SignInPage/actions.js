import * as actionTypes from './constants';

export const signIn = user => ({
  type: actionTypes.SIGN_IN,
  user,
});

export const signInSuccess = data => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  data,
});

export const signInFaild = (error, message) => ({
  type: actionTypes.SIGN_IN_FAILD,
  error,
  message,
});

export const logOutAccount = () => ({
  type: actionTypes.LOG_OUT,
});
