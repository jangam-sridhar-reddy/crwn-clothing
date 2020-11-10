import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  SignInSuccessAction,
  SignInFailureAction,
  signOutSuccessAction,
  signOutFailureAction,
  signUpSuccessAction,
  signUpFailureAction,
} from "./user.action";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(
    createUserProfileDocument,
    userAuth,
    additionalData
  );
  const snapShot = yield userRef.get();
  yield put(SignInSuccessAction({ id: snapShot.id, ...snapShot.data() }));
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailureAction(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailureAction(error));
  }
}

export function* onUserAuthenticate() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield SignInFailureAction(error);
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction());
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailureAction(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* googleSignInStartSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_STATUS, onUserAuthenticate);
}

export function* signOutStateSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(onEmailSignInStart),
    call(onUserAuthenticate),
    call(signOutStateSaga),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
