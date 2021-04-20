import * as actionTypes from './constants';

export const fetchListQuestion = () => ({
  type: actionTypes.FETCH_DATA,
});

export const fetchListQuestionSuccess = data => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  data,
});

export const fetchListQuestionFaild = error => ({
  type: actionTypes.FETCH_DATA_FAILD,
  error,
});

export const submitValue = data => ({
  type: actionTypes.SUBMIT_VALUE,
  data,
});

export const submitValueSuccess = (score, arrFaild) => ({
  type: actionTypes.SUBMIT_VALUE_SUCCESS,
  score,
  arrFaild,
});

export const submitValueFaild = mes => ({
  type: actionTypes.SUBMIT_VALUE_FAILD,
  mes,
});
