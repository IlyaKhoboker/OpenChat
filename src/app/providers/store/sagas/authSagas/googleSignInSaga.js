import { takeLatest, put, call } from "@redux-saga/core/effects";
import { SIGN_IN_FAILURE, GOOGLE_SIGN_IN, GOOGLE_SIGN_IN_SUCCESS } from "./../../actions/authActions";
import firebase from "firebase/app";
import "firebase/auth";

export function* googleSignInSagaWorker(action) {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();
    const { user } = yield call([auth, auth.signInWithPopup], provider);
    const token = yield auth.currentUser.getIdToken(true);
    const uid = yield auth.currentUser.uid;

    yield put({ type: GOOGLE_SIGN_IN_SUCCESS, user: user, token: token, uid: uid });
  } catch (error) {
    const error_message = new Error("Failed to sign in");

    yield put({ type: SIGN_IN_FAILURE, error: error_message });
  }
}

export function* googleSignInSagaWatcher() {
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInSagaWorker);
}
