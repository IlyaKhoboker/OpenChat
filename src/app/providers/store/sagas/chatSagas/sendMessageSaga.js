import { takeLatest, put, call } from '@redux-saga/core/effects';
import { SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../../actions/chatActions';
import firebase from 'firebase/app';
import 'firebase/database';



export function* sendMessageSagaWorker(action) {
    try {
        const {chatRoomKey, sender, value, timestamp} = action.payload;

        const database = firebase.database();

        const postMessage = (chatRoomKey, sender, value, timestamp) => {
            const messagesRef = database.ref(chatRoomKey).child('messages');
            const newMessagesRef = messagesRef.push();
            newMessagesRef.set({
                writtenBy: sender,
                content: value,
                timestamp: timestamp
            })
        }

        yield call(
            [database, postMessage],
            chatRoomKey,
            sender,
            value,
            timestamp
        );
    
        yield put({ type: SEND_MESSAGE_SUCCESS });
      } catch (error) {
          yield console.log(error);
          yield put({ type: SEND_MESSAGE_FAILURE });
      }
  }
  
  export function* sendMessageSagaWatcher() {
    yield takeLatest(SEND_MESSAGE, sendMessageSagaWorker);
  }