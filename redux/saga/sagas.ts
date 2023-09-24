import { call, takeEvery } from "redux-saga/effects";
import { LOGIN_USER_ACTION } from "../actions/actions";

function* submitLoginCall(action: any) {
  yield call(() => console.log("API CALL", action));
}

function* watchLogin() {
  yield takeEvery(LOGIN_USER_ACTION, submitLoginCall);
}

export default watchLogin;
