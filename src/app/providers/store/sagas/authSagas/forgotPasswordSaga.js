import { takeLatest, put, call } from "@redux-saga/core/effects";
import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS } from "./../../actions/authActions";
import firebase from "firebase/app";
import "firebase/auth";

export function* forgotPasswordSagaWorker(action) {
  try {
    const auth = firebase.auth();
    yield call([auth, auth.sendPasswordResetEmail], action.payload.email, { url: "https://chat-5dc21.web.app/signIn", handleCodeInApp: true });

    yield put({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    yield console.log(error);
  }
}

export function* forgotPasswordSagaWatcher() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSagaWorker);
}
