import { takeLatest, put, call } from '@redux-saga/core/effects';
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './../../actions/authActions';
import firebase from 'firebase/app';
import 'firebase/auth';

export function* signInSagaWorker(action) {
    try {
        const auth = firebase.auth();
        yield call(
          [auth, auth.signInWithEmailAndPassword],
          action.payload.email,
          action.payload.password
        );
        const token = yield auth.currentUser.getIdToken(true);
        const uid = yield auth.currentUser.uid;
    
        yield put({ type: SIGN_IN_SUCCESS, user: action.payload, token: token, uid: uid});
      } catch (error) {
        const error_message = new Error('Failed to sign in');
    
        yield put({ type: SIGN_IN_FAILURE, error: error_message });
      }
}

export function* signInSagaWatcher() {
    yield takeLatest(SIGN_IN, signInSagaWorker);
}