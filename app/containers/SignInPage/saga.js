import { call, put, takeEvery } from 'redux-saga/effects';
import * as requestApiCaller from './../../utils/request';
import * as actions from './actions';
import * as actionsType from './constants';

const URL_REQUEST = 'https://6041b1627f50e000173aae49.mockapi.io';
const END_POINT_USERS = '/users';

function* signProcessSaga({ user }) {
  const userSignIn = user;
  try {
    const respon = yield call(
      requestApiCaller.fetchListUserAxios,
      `${URL_REQUEST}${END_POINT_USERS}`,
    );
    let userBeFind;
    respon.data.forEach(item => {
      if (
        item.identification === userSignIn.identification &&
        item.password === userSignIn.password
      ) {
        userBeFind = item;
      }
    });
    if (userBeFind) {
      yield put(actions.signInSuccess(userBeFind));
    } else {
      yield put(
        actions.signInFaild(userBeFind, 'User account or PassWord not correct'),
      );
    }
  } catch (error) {
    console.log(error);
    yield put(actions.signInFaild(error, 'API faild'));
  }
}

function* signInSaga() {
  yield takeEvery(actionsType.SIGN_IN, signProcessSaga);
}

export default signInSaga;
