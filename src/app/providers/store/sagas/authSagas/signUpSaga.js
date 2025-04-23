import { takeLatest, put, call } from "@redux-saga/core/effects";
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./../../actions/authActions";
import firebase from "firebase/app";
import "firebase/auth";

export function* signUpSagaWorker(action) {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.createUserWithEmailAndPassword], action.payload.email, action.payload.password);
    const token = yield auth.currentUser.getIdToken(true);
    const uid = yield auth.currentUser.uid;

    yield put({ type: SIGN_UP_SUCCESS, user: action.payload, token: token, uid: uid });
  } catch (error) {
    const error_message = new Error("Failed to sign up");

    yield put({ type: SIGN_UP_FAILURE, error: error_message });
  }
}

export function* signUpSagaWatcher() {
  yield takeLatest(SIGN_UP, signUpSagaWorker);
}
