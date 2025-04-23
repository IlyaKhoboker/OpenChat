import { takeLatest, put, call } from '@redux-saga/core/effects';
import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS } from './../../actions/authActions';
import firebase from 'firebase/app';
import 'firebase/auth';

export function* resetPasswordSagaWorker(action) {
    try {
        const auth = firebase.auth();
        yield call([auth, auth.confirmPasswordReset], action.payload.actionCode, action.payload.password);
    
        yield put({ type: RESET_PASSWORD_SUCCESS});
      } catch (error) {
          yield console.log(error);
      }
  }
  
  export function* resetPasswordSagaWatcher() {
    yield takeLatest(RESET_PASSWORD, resetPasswordSagaWorker);
  }