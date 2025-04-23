import { all } from "@redux-saga/core/effects";
import { signInSagaWatcher } from "./authSagas/signInSaga";
import { signUpSagaWatcher } from "./authSagas/signUpSaga";

export default function* rootSaga() {
  yield all([signInSagaWatcher(), signUpSagaWatcher()]);
}
