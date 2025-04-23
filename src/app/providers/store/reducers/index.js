import { combineReducers } from "redux";
import authReducer from "./authReducer";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
