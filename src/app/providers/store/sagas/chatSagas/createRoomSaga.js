import { takeLatest, put, call } from '@redux-saga/core/effects';
import { CREATE_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE } from '../../actions/chatActions';
import firebase from 'firebase/app';
import 'firebase/database';



export function* createRoomSagaWorker(action) {
    try {
        const database = firebase.database();
        const createChatRoom = (name, password) => {
            const roomsRef = database.ref('/');
            const newRoomsRef = roomsRef.push();
            newRoomsRef.set({
            name: name,
            password: password,
            messages: []
          });
          }
        yield call(
        [database, createChatRoom],
         action.payload.name,
         action.payload.password
        );
    
        yield put({ type: CREATE_ROOM_SUCCESS});
        
      } catch (error) {
          yield console.log(error);

          yield put({ type: CREATE_ROOM_FAILURE });
      }
  }
  
  export function* createRoomSagaWatcher() {
    yield takeLatest(CREATE_ROOM, createRoomSagaWorker);
  }