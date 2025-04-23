import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authReducer,
  chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
