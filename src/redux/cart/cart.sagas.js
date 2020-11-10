import { takeLatest, call, put, all } from "redux-saga/effects";

import { clearCart } from "./cart.actions";

import usetActionTypes from "../user/user.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(usetActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
