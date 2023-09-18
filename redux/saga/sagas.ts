import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { loginStart, loginSuccess, loginFailure } from "./loginSlice";

function* submitCall() {
  yield call(() => console.log("API CALL"))
}

function* watchLogin() {
  yield takeEvery()
}