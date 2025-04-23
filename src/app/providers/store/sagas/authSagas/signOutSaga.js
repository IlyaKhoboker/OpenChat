import { takeLatest, put, call } from "@redux-saga/core/effects";
import { SIGN_OUT } from "./../../actions/authActions";
import firebase from "firebase/app";
import "firebase/auth";

export function* signOutSagaWorker(action) {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.signOut]);

    const token = yield auth.currentUser.getIdToken(false);

    yield put({ type: SIGN_OUT, token: token });
  } catch (error) {
    yield console.log(error);
  }
}

export function* signOutSagaWatcher() {
  yield takeLatest(SIGN_OUT, signOutSagaWorker);
}
