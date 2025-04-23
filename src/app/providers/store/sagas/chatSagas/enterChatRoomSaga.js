import { takeLatest, put, call } from '@redux-saga/core/effects';
import { ENTER_CHAT, ENTER_CHAT_SUCCESS, ENTER_CHAT_FAILURE } from '../../actions/chatActions';

export function* enterChatRoomSagaWorker(action) {
    try {
        const chatRoomName = action.payload.chatRoomName;
        const chatRoomKey = action.payload.chatRoomKey;
        const chatRoomPassword = action.payload.chatRoomPassword;
        const password = action.payload.password;

        const comprassionOfPasswords = (password, correctPassword) => {
            return password === correctPassword;
        }
        const comprassionResult = yield call(
        [null, comprassionOfPasswords],
         password,
         chatRoomPassword
        );

        if (comprassionResult === false) {
            throw new Error('Password mismatch');
        }
    
        yield put({ type: ENTER_CHAT_SUCCESS, chatRoomKey: chatRoomKey, chatRoomName: chatRoomName });
      } catch (error) {

          const error_message = new Error('Failed to enter');

          yield put({ type: ENTER_CHAT_FAILURE, error_message: error_message.message });
      }
  }
  
  export function* enterChatRoomSagaWatcher() {
    yield takeLatest(ENTER_CHAT, enterChatRoomSagaWorker);
  }