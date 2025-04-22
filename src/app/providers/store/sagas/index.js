import { all } from "@redux-saga/core/effects";
import { signInSagaWatcher } from "./authSagas/signInSaga";

export default function* rootSaga() {
  yield all([signInSagaWatcher()]);
}
