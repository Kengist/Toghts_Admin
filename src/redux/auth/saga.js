import { all, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { LOGIN, loginSuccess, loginError } from "../actions";

function* LOGINUSER() {
  try {
    const response = yield axios.get(`API`);
    // console.log(response);

    yield put(loginSuccess(response.data.data));
  } catch (error) {
    // console.log(error)
    // console.log(error.response)
    yield put(loginError(error.response.data));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGINUSER, LOGIN);
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
