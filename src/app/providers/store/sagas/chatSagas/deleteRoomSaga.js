import { takeLatest, put, call } from '@redux-saga/core/effects';
import { DELETE_ROOM } from '../../actions/chatActions';
import firebase from 'firebase/app';
import 'firebase/database';



export function* deleteRoomSagaWorker(action) {
    try {
        const chatRoomKey = action.payload;

        const database = firebase.database();

        const deleteRoom = (chatRoomKey) => {
            const chatRoomRef = database.ref('/');
            const curChatRoomRef = chatRoomRef.child(chatRoomKey);
            curChatRoomRef.remove();
        }

        yield call(
            [database, deleteRoom],
            chatRoomKey
        );
    
        yield put({ type: DELETE_ROOM });
      } catch (error) {
          yield console.log(error);
      }
  }
  
  export function* deleteRoomSagaWatcher() {
    yield takeLatest(DELETE_ROOM, deleteRoomSagaWorker);
  }