import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import firebase from "firebase/app";
import "firebase/auth";

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

ReactDOM.render(<App />, document.getElementById("root"));
