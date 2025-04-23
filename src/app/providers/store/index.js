import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
