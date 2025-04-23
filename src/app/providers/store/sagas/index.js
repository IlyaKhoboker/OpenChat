import { all } from "@redux-saga/core/effects";
import { signInSagaWatcher } from "./authSagas/signInSaga";
import { signUpSagaWatcher } from "./authSagas/signUpSaga";
import { googleSignInSagaWatcher } from "./authSagas/googleSignInSaga";
import { forgotPasswordSagaWatcher } from "./authSagas/forgotPasswordSaga";
import { resetPasswordSagaWatcher } from "./authSagas/resetPasswordSaga";
import { signOutSagaWatcher } from "./authSagas/signOutSaga";

import { createRoomSagaWatcher } from "./chatSagas/createRoomSaga";
import { enterChatRoomSagaWatcher } from "./chatSagas/enterChatRoomSaga";
import { sendMessageSagaWatcher } from "./chatSagas/sendMessageSaga";
import { deleteMessageSagaWatcher } from "./chatSagas/deleteMessageSaga";
import { deleteRoomSagaWatcher } from "./chatSagas/deleteRoomSaga";

export default function* rootSaga() {
  yield all([
    signInSagaWatcher(),
    googleSignInSagaWatcher(),
    signUpSagaWatcher(),
    signOutSagaWatcher(),
    forgotPasswordSagaWatcher(),
    resetPasswordSagaWatcher(),
    createRoomSagaWatcher(),
    enterChatRoomSagaWatcher(),
    sendMessageSagaWatcher(),
    deleteMessageSagaWatcher(),
    deleteRoomSagaWatcher(),
  ]);
}
