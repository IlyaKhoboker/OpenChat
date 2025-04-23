import { all } from "@redux-saga/core/effects";
import { signInSagaWatcher } from "./authSagas/signInSaga";
import { signUpSagaWatcher } from "./authSagas/signUpSaga";
import { forgotPasswordSagaWatcher } from "./authSagas/forgotPasswordSaga";
import { resetPasswordSagaWatcher } from "./authSagas/resetPasswordSaga";

export default function* rootSaga() {
  yield all([signInSagaWatcher(), signUpSagaWatcher(), forgotPasswordSagaWatcher(), resetPasswordSagaWatcher()]);
}
