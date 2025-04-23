import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import { store, persistor } from "./app/providers/store";
import { PersistGate } from "redux-persist/integration/react";
import firebase from "firebase/app";
import "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

var firebaseConfig = {
  apiKey: "AIzaSyAKc3lpbS6i2BavgdgyXoBiWi5n1CO3_6s",
  authDomain: "chat-5dc21.firebaseapp.com",
  projectId: "chat-5dc21",
  storageBucket: "chat-5dc21.appspot.com",
  messagingSenderId: "998786589742",
  appId: "1:998786589742:web:bc8219d37022e5cca86bbf",
  measurementId: "G-ZCXH7FJYV1",
  databaseURL: "https://chat-5dc21-default-rtdb.europe-west1.firebasedatabase.app",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
