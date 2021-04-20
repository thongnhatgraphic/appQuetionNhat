import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as ApiCaller from './../../utils/request';
import * as actionsType from './constants';

const URL_REQUEST = 'https://6041b1627f50e000173aae49.mockapi.io';
const END_POINT_QUESTIONS = '/questions';

function* fetchListQuestionSaga() {
  const respon = yield call(
    ApiCaller.fetchListQuestionReQuest,
    `${URL_REQUEST}${END_POINT_QUESTIONS}`,
  );
  if (respon.status === 200) {
    yield put(actions.fetchListQuestionSuccess(respon.data));
  } else {
    yield put(actions.fetchListQuestionFaild(respon.error));
  }
}

function* submitValueSaga({ data }) {
  const result = { ...data };
  const respon = yield call(
    ApiCaller.fetchListQuestionReQuest,
    `${URL_REQUEST}${END_POINT_QUESTIONS}`,
  );
  if (respon.status === 200) {
    let score = 0;
    const listArr = respon.data;
    const arrFaild = [];
    listArr.forEach((question, index) => {
      const { name } = question;
      // console.log(question.answerTrue);
      // console.log(name);
      if (result.hasOwnProperty(name)) {
        // listAnswerTrue.push(question.answerTrue);
        console.log(`lần ${index + 1}`, question.answerTrue);
        console.log(`lần ${index + 1}`, result[name]);
        if (
          question.answerTrue === result[name] &&
          question.answerTrue.toLowerCase() === result[name].toLowerCase()
        ) {
          // console.log(`Lần ${index + 1}`, question.answerTrue);
          // console.log(result[name]);
          score += 1;
        } else if (
          typeof question.answerTrue === 'object' &&
          typeof result[name] === 'object' &&
          question.answerTrue.every(item => result[name].includes(item))
        ) {
          score += 1;
        } else {
          arrFaild.push(`Câu ${index + 1} Sai`);
        }
      }
    });
    yield put(actions.submitValueSuccess(score, arrFaild));
  } else {
    yield put(actions.submitValueFaild('Có lỗi xảy ra'));
  }
}

function* fetchListQuestionListening() {
  yield takeEvery(actionsType.FETCH_DATA, fetchListQuestionSaga);
  yield takeEvery(actionsType.SUBMIT_VALUE, submitValueSaga);
}

export default fetchListQuestionListening;
