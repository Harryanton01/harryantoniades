import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyAY6bgGlaTg2VyTHPtMAiuwQbHVozPKKiI",
  authDomain: "harryantoniades-240c5.firebaseapp.com",
  projectId: "harryantoniades-240c5",
  storageBucket: "harryantoniades-240c5.appspot.com",
  messagingSenderId: "846195080212",
  appId: "1:846195080212:web:08188510b225945b42bb01",
  measurementId: "G-DTHSEEXB6K",
  databaseURL:
    "https://harryantoniades-240c5-default-rtdb.europe-west1.firebasedatabase.app",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
