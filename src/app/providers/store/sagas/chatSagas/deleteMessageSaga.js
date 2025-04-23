import { takeLatest, put, call } from '@redux-saga/core/effects';
import { DELETE_MESSAGE } from '../../actions/chatActions';
import firebase from 'firebase/app';
import 'firebase/database';



export function* deleteMessageSagaWorker(action) {
    try {
        const {id, currentChatRoomKey} = action.payload;

        const database = firebase.database();

        const deleteMessage = (id, currentChatRoomKey) => {
            const messagesRef = database.ref(currentChatRoomKey).child('messages');
            const messageRef = messagesRef.child(id)
            messageRef.remove();
            
        }

        yield call(
            [database, deleteMessage],
            id,
            currentChatRoomKey
        );
    
        yield put({ type: DELETE_MESSAGE });
      } catch (error) {
          yield console.log(error);
      }
  }
  
  export function* deleteMessageSagaWatcher() {
    yield takeLatest(DELETE_MESSAGE, deleteMessageSagaWorker);
  }